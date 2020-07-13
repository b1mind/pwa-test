<script type="text/javascript">
  // brought over from my site cause why not components right?!?
  import { createEventDispatcher } from 'svelte'

  let dispatch = createEventDispatcher()

  export let sorts
  export let activeSort
</script>

<div class="tabs">
  <ul>
    {#each sorts as sort}
      <li on:click={() => dispatch('tabChange', sort)}>
        <div class:active={sort === activeSort}>{sort}</div>
      </li>
    {/each}
  </ul>
  <div>
    <slot />
  </div>
</div>

<style lang="scss">
  .tabs {
    margin-bottom: 1em;
  }

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    margin: 0 1em;
    font-size: 1rem;
    color: grey;
    cursor: pointer;
  }

  .active {
    padding-bottom: 0.5em;
    color: #2196f3;
    border-bottom: 2px solid #2196f3;
  }
</style>
