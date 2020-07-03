<script>
  export let type = 'primary'
  export let flat = false
  export let inverse = false
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style type="text/scss">
  button {
    padding: 8px 12px;
    font-weight: bold;
    border: 0;
    border-radius: 6px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .primary {
    color: white;
    background: salmon;
  }
  .secondary {
    color: white;
    background: skyblue;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: salmon;
    background: white;
    border: 2px solid salmon;
  }
  .primary.inverse {
    color: skyblue;
    background: white;
    border: 2px solid salmon;
  }
</style>
