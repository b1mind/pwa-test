import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function animate(node, { type, ...args }) {
  let method = gsap[type]
  return method(node, args)
}

export function triggerMe(node, { ...args }) {
  let method = ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, args),
    start: 'center center',
    toggleActions: 'play none none reverse',
    //markers: true,
  })
  return method
}

export function newTrigger(node, { ...args }) {
  let method = ScrollTrigger.create({
    trigger: node,
    animation: gsap.from(node, { duration: 1, opacity: 0, x: 100 }),
    ...args,
    //markers: true,
  })

  return method
}

export function pinScrub(node, { ...args }) {
  let st = ScrollTrigger.create({
    trigger: node,
    pin: true,
    scrub: true,
    animation: gsap.from(node.children, { ...args }),
    start: 'center center',
    toggleActions: 'play none none reverse',
    //markers: true,
  })
  return st
}

export function killTriggers() {
  let allTriggers = ScrollTrigger.getAll()
  console.log(allTriggers)
  allTriggers.forEach((t) => {
    t.kill()
  })
}
