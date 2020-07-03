import { gsap } from 'gsap/'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function animate(node, { type, ...args }) {
  let method = gsap[type]
  return method(node, args)
}

export function scrollMe(node, { ...args }) {
  let method = ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, args),
    start: 'center center',
    toggleActions: 'play none none reverse',
  })
  return method
}
