export const GUESS = 'GUESS'


export default (answer) => ({
  type: GUESS,
  payload: answer
})
