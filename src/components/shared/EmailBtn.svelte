<script>
  export let email
  export let btnText = 'Send Email'
  function mailTo() {
    let mail = document.createElement('a')
    mail.href = `mailto:${email}`
    mail.click()
  }
</script>

<button class="btn" on:click={mailTo}>{btnText}</button>

<style type="text/scss">
  .btn {
    cursor: pointer;
  }
</style>
