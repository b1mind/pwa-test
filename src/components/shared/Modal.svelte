<script>
  export let msg = 'I am a Modal'
  export let showModal = false
  export let isActive = false
  //todo stuff
  /* 
    //*testing
   */
</script>

{#if showModal}
  <div class="backdrop" on:click|self>
    <div class="modal" class:active={isActive}>
      <h2>{msg}</h2>
      <slot name="title" />
      <slot />
    </div>
  </div>
{/if}

<!-- //* ------ //first line holds color not rest
//strikes through though
 -->

<style type="text/scss">
  .backdrop {
    /* 
    //todo test
    */
    //* test
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 420;
  }

  .modal {
    max-width: 320px;
    margin: 20% auto;
    padding: 1em;
    text-align: center;
    background: #eeeeee;
    border-radius: 20px;
  }

  .active {
    background: salmon;
    color: white;
  }
</style>
