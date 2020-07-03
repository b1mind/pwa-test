<script>
  import Header from '../Components/Header.svelte'
  import Footer from '../Components/Footer.svelte'
  import Tabs from '../Components/shared/Tabs.svelte'

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

<Tabs activeItem={activeItem} items={items} on:tabChange={tabChange} />
{#if activeItem === 'Bio'}
  <p>This is the 'about' page. There's not much here.</p>
{:else if activeItem === 'Story'}
  <p>Bio</p>
{:else}
  <p>History of svelte</p>
{/if}
<Footer />

<style type="text/scss">

</style>
