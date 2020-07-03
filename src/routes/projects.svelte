<script>
  import { onMount, onDestroy } from 'svelte'
  import Icon from 'fa-svelte'
  import { faArrowsAlt, faArrowDown, faFeather, faBacon, faFish } from '@fortawesome/free-solid-svg-icons'
  import { gsap } from 'gsap'

  import { animate, scrollMe } from '../gsap.js'

  let desc = false
  let msg = 'click me'
  function testClick(e) {
    let test = e.target
    console.log(test)
    // using GSAP test
    gsap.to(test, { border: '0px', scale: 1.5, duration: 0.5, yoyo: true, repeat: 5 })
    msg = 'GSAP 🐢 test success!'
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<p use:animate={{ type: 'from', duration: 1, opacity: 0, x: -100 }}>just some projects</p>
<p use:animate={{ type: 'from', duration: 1, opacity: 0, x: 100, onComplete: () => (desc = true) }}>
  <Icon icon={faArrowDown} />
  you can use fontAwesome too !
</p>
<!-- 
{#if desc}
  <p transition:animate={{ type: 'from', duration: 1, opacity: 0 }} class="desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus libero quisquam, aliquam quod vel quia necessitatibus? Cupiditate, excepturi nisi. Nam tempora ex numquam voluptatum minima
    similique sequi, fugit placeat!
  </p>
{/if} -->
<h1 class="test" on:click={testClick}>{msg}</h1>
<Icon icon={faArrowsAlt} />
Link
<Icon icon={faFeather} />
Test
<Icon icon={faFish} />
More
<Icon icon={faBacon} />
Really
<div class="spacer">test</div>
<div class="pinned" use:scrollMe={{ duration: 1, opacity: 0, x: 100 }}>
  <p>testPin</p>
</div>
<div class="spacer">test</div>
<div class="pinned" use:scrollMe={{ duration: 1, opacity: 0, y: -100 }}>
  <p>testPin</p>
</div>
<div class="spacer">test</div>

<style type="text/scss">
  .spacer {
    min-height: 100vh;
  }
  .pinned {
    background: grey;
  }
</style>
