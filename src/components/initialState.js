const initialState = {
    targetNumber: Math.floor(Math.random() * 11),
    guess: '',
    guessNumber: 0,
    pastGuess: [],
    feedback: 'Make your Guess!',
    classes: 'submit'
  };

  export default initialState;