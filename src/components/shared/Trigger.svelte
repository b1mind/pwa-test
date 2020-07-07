<script>
  import { afterUpdate, onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  //set default props for trigger
  export let tween = { autoAlpha: 0, x: '+=100', stagger: 0.3 }
  export let tweenType = 'from'
  export let start = 'center center'
  export let end = 'bottom top'
  export let pin = true
  export let scrub = true

  let target
  let st

  function MakeTrigger() {
    st = ScrollTrigger.create({
      trigger: target,
      pin: pin,
      scrub: scrub,
      animation: gsap[tweenType](target.children, { ...tween }),
      start: start,
      end: end,
      toggleActions: 'play none none reverse',
      //markers: true,
    })
  }

  onMount(() => {
    MakeTrigger()
    return () => {
      console.log(ScrollTrigger.getAll())
      st.kill()
    }
  })
</script>

<div class="triggered" bind:this={target} {pin} {scrub} {tweenType} {tween} {start} {end}>
  <slot />
</div>

<style type="text/scss">
  .triggered {
    padding: 2rem;
    background-color: salmon;
  }
</style>
