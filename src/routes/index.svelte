<script>
  //todo tab animation can be glitched clicking to fast 🏃‍♀️💨 probably do to the live var, maybe move logic back to markup?
  //imports
  import { afterUpdate, beforeUpdate, onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { writable, readable, derived } from 'svelte-persistent-store/dist/local'
  //components
  import Tabs from '../components/shared/Tabs.svelte'

  let storedList = writable('list', [
    { id: 2, done: false, text: 'make it faster 🏃‍♀️' },
    { id: 1, done: false, text: 'make it clever 🦊' },
    { id: 0, done: false, text: 'make it svelte 🧈' },
  ])

  let todos = JSON.parse(localStorage.list)

  let storedId = writable('tid', 3)
  let tid = JSON.parse(localStorage.tid) + 1

  let newTodo = ''
  let sorts = ['All', 'Todo', 'Done']
  let activeSort = 'All'

  function addItem(e) {
    if (!newTodo) return
    let todo = { id: tid++, done: false, text: newTodo }
    todos = [todo, ...todos]
    storedList.set(todos)
    storedId.set(todo.id)
    newTodo = ''
    /* //Todo refactor to loop and reassign key[id]: value 
    todos.forEach((id) => {
      if (todo.id === id.id) {
        todo.id = tid + 100
        tid++
      }
    }) */
  }

  function deleteItem(todo) {
    todos = todos.filter((t) => t !== todo)
    storedList.set(todos)
  }

  function clearCompleted() {
    todos = todos.filter((t) => !t.done)
  }

  $: leftTodo = todos.filter((t) => !t.done)
  $: doneTodo = todos.filter((t) => t.done)
  $: sortTodos = todos

  //tabs and sorts
  const tabChange = (e) => {
    activeSort = e.detail
  }

  afterUpdate(() => {
    activeSort === 'Todo' ? (sortTodos = leftTodo) : activeSort === 'Done' ? (sortTodos = doneTodo) : (sortTodos = todos)
    storedList.set(todos)
  })
</script>

<div class="wrap">
  <h1>todos</h1>
  <form on:submit|preventDefault={addItem}>
    <div class="inputWrap">
      <input id="inputTask" name="inputTask" placeholder=" " bind:value={newTodo} />
      <label class="label" for="inputTask">What needs to be done?</label>
      <button disabled={!newTodo}>➕</button>
    </div>
  </form>
  {#if todos.length === 0}
    <p>Please add a task</p>
  {:else if leftTodo.length === 0}
    <p>Tasks complete</p>
  {:else if leftTodo.length === 1}
    <p>{leftTodo.length} task left</p>
  {:else}
    <p>{leftTodo.length} tasks left</p>
  {/if}

  <Tabs {activeSort} {sorts} on:tabChange={tabChange}>
    {#each sortTodos as todo (todo.id)}
      <div class="task" animate:flip={{ duration: 350 }} transition:fly={{ x: 50, duration: 350 }}>
        <label class="container">
          <span class="todoText" class:done={todo.done}>{todo.text}</span>
          <input id="todo-{todo.id}" type="checkbox" name="todo check" bind:checked={todo.done} />
          <span class="checkmark" />
        </label>
        <span class="delete" on:click={() => deleteItem(todo)}>X</span>
      </div>
    {/each}
  </Tabs>
</div>

<style lang="scss">
  :global()body {
    overflow-y: scroll;
  }

  .wrap {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    word-wrap: break-word;
  }

  .inputWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .label {
    position: absolute;
    top: 0.75rem;
    left: 0.25rem;
    color: grey;
    pointer-events: none;
    transition: 200ms;
  }

  #inputTask {
    min-width: 245px;
    padding-top: 0.85rem;
    font-size: 1rem;
    border: transparent;
    border-bottom: 2px solid darkgrey;
    outline: transparent;
  }

  #inputTask:hover {
    border-bottom: 2px solid #2196f3;
  }

  #inputTask:focus {
    border-bottom: 2px solid black;
  }

  #inputTask:focus + label,
  #inputTask:not(:placeholder-shown) + label {
    top: -1rem;
    left: 0;
    color: #2196f3;
  }

  .wrap button {
    width: 32px;
    height: 32px;
    margin: 0;
    font-size: 0.75rem;
    border-radius: 50%;
    border: 2px solid darkgrey;
  }

  .wrap button:hover {
    border: 2px solid #2196f3;
  }

  .task {
    position: relative;
    text-align: left;
  }

  h1 {
    font-size: 3rem;
  }

  .done {
    opacity: 0.4;
    text-decoration: line-through;
  }

  .delete {
    padding: 0.5rem;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    color: grey;
    font-weight: bolder;
    cursor: pointer;
  }

  .delete:hover,
  .delete:active {
    color: red;
  }

  /* stole some the checkbox style from w3 schools for now*/
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    padding-bottom: 5px;
    margin-bottom: 12px;
    font-size: 22px;
    border-bottom: 1px dotted lightgrey;
  }

  /*hide normal input*/
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #eee;
    cursor: pointer;
  }

  .container input:hover ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
