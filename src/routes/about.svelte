<script>
  import Header from '../Components/Header.svelte'
  import Footer from '../Components/Footer.svelte'
  import Tabs from '../Components/shared/Tabs.svelte'
  import Trigger from '../components/shared/Trigger.svelte'
  //tabs info
  let items = ['Bio', 'Story', 'History']
  let activeItem = 'Bio'

  const tabChange = (e) => {
    activeItem = e.detail
  }
</script>

<svelte:head>
  <title>About</title>
</svelte:head>
<Header />
<h1>About Svelte</h1>

<Tabs {activeItem} {items} on:tabChange={tabChange} />
{#if activeItem === 'Bio'}
  <p>This is the 'about' page. There's not much here.</p>
{:else if activeItem === 'Story'}
  <p>Bio</p>
  <a href="projects#anchor">test</a>
{:else}
  <p>History of svelte</p>
{/if}
<div class="spacer">test</div>
<Trigger>
  <p>test</p>
  <p>test</p>
  <p>test</p>
</Trigger>
<div class="spacer">test</div>
<Trigger>
  <p>test</p>
  <p>test</p>
  <p>test</p>
</Trigger>
<div class="spacer">test</div>
<Footer />

<style type="text/scss">
  .spacer {
    min-height: 100vh;
  }
</style>
