import letter from '../../components/Guess.js'

export const GUESS = 'GUESS'


export default () => ({
  type: GUESS,
  payload: letter
})
