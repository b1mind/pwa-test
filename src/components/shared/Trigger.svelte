<script>
  import { beforeUpdate, onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  let target

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)
    let st = ScrollTrigger.create({
      trigger: target,
      pin: true,
      scrub: true,
      animation: gsap.from(target.children, { autoAlpha: 0, x: '+=100', stagger: 0.3 }),
      start: 'center center',
      toggleActions: 'play none none reverse',
      //markers: true,
    })
    return () => {
      console.log(ScrollTrigger.getAll())
      st.kill()
    }
  })
</script>

<div class="triggered" bind:this={target}>
  <slot />
</div>

<style type="text/scss">
  .triggered {
    padding: 2rem;
    background-color: salmon;
  }
</style>
