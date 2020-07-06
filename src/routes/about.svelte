<script>
  import Header from '../Components/Header.svelte'
  import Footer from '../Components/Footer.svelte'
  import Tabs from '../Components/shared/Tabs.svelte'
  import Trigger from '../components/shared/Trigger.svelte'
  import Icon from 'fa-svelte'

  import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

  //tabs info
  let items = ['Bio', 'Story', 'History']
  let activeItem = 'Bio'

  const tabChange = (e) => {
    activeItem = e.detail
  }

  let tweenType = 'from'
  let start = 'top 70%'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>
<Header />
<h1>About Svelte</h1>

<div class="spacer">
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Bio'}
    <p>This is the 'about' page. There's not much here.</p>
  {:else if activeItem === 'Story'}
    <p>
      Bio
      <a href="projects#anchor">test</a>
    </p>
  {:else}
    <p>History of svelte</p>
  {/if}
</div>
<Trigger start="bottom center">
  <Icon icon={faArrowDown} />
  <span>keep scrolling</span>
  <Icon icon={faArrowDown} />
  <span>don't stop</span>
  <Icon icon={faArrowDown} />
  <span>ya thats the</span>
</Trigger>
<Trigger start="top center" pin={false} scrub={false} tween={{ autoAlpha: 0, x: '+=200' }}>
  <p>Good test like any other test its more like a screw up gone right</p>
</Trigger>
<div class="spacer">
  <Trigger end="300 top" tween={{ autoAlpha: 0, y: 100, stagger: 0.5 }}>
    <span>one</span>
    <span>two</span>
    <span>three</span>
    <span>four</span>
    <span>five</span>
    <span>six</span>
  </Trigger>
</div>
<Trigger {start} tween={{ autoAlpha: 0, y: 300, stagger: 0.5 }}>
  <Icon icon={faArrowDown} />
  <Icon icon={faArrowDown} />
  <Icon icon={faArrowDown} />
</Trigger>
<Trigger>
  <p>test</p>
  <p>test</p>
  <p>test</p>
</Trigger>
<div class="spacer">test</div>
<Footer />

<style type="text/scss">
  .spacer {
    min-height: 700px;
    margin: 1rem 0;
    background: lightblue;
    p {
      text-align: center;
    }
  }
</style>
