<script>
  import PollStore from '../stores/PollStore.js'
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()
  import Button from './Button.svelte'
  let fields = { question: '', answerA: '', answerB: '' }
  let errors = { question: '', answerA: '', answerB: '' }
  let valid = false
  let ranNum = Math.floor(Math.random() * 1000)
  const submitHandler = (e) => {
    valid = true

    if (fields.question.trim().length <= 5) {
      valid = false
      errors.question = 'Must be at least 5 chars long'
    } else {
      errors.question = ''
    }
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: ranNum }
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls]
      })
      dispatch('add')
    }
    //< took out because added required and need better error logic
    /* if (fields.answerA.trim().length < 1) {
      valid = false
      errors.answerA = 'cannot be empty'
    } else {
      errors.answerA = ''
    }
    if (fields.answerB.trim().length < 1) {
      valid = false
      errors.answerB = 'cannot be empty'
    } else {
      errors.answerB = ''
    } */
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="formField">
    <label for="question">Poll Question:</label>
    <input required type="text" id="question" bind:value={fields.question} />
    {errors.question}
  </div>
  <div class="formField">
    <label for="answer-a">Answer A:</label>
    <input required type="text" id="answer-a" bind:value={fields.answerA} />
    {errors.answerA}
  </div>
  <div class="formField">
    <label for="answer-b">Answer B:</label>
    <input required type="text" id="answer-b" bind:value={fields.answerB} />
    {errors.answerB}
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>

</form>

<style type="text/scss">
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .formField {
    margin: 18px auto;
  }
  input {
    width: 100%;
    height: 2em;
    border: 2px solid grey;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
</style>
