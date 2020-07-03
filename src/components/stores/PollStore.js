import {writable}  from 'svelte/store'

const PollStore = writable([
  {
  id: 1,
  question: 'Svelte or React?',
  answerA: 'Svelte',
  answerB: 'React',
  votesA: 29,
  votesB:20,
  },
])

export default PollStore