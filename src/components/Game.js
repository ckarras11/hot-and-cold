import React, { Component } from 'react';
import './Game.css';
import GameForm from './GameForm'

export default class GuessContainer extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleGuess=this.handleGuess.bind(this);
    this.handleGuess=this.handleGuess.bind(this);
    this.state = {
      targetNumber: Math.floor(Math.random() * 11),
      guess: '',
      guessNumber: 0,
      pastGuess: [],
      feedback: 'Make your Guess!',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let newGuessNumber = this.state.guessNumber + 1;
    this.state.pastGuess.push(this.state.guess)
    this.setState({
      guessNumber: newGuessNumber,
      guess: ''
    });
    if (Number.parseInt(this.state.guess) === this.state.targetNumber) {
      this.setState({
        feedback: 'Correct! Click new game to play again.'
      })
    } else {
      this.setState({
        feedback: 'Sorry, Guess Again'
      })
    }
  }

  handleGuess(e) {
    this.setState({
      guess: e.target.value
    });
  }

  canSubmit() {
    return (
      this.state.guess.length > 0
    )
  }
  render() {
    let isEnabled = this.canSubmit()
    console.log(isEnabled);
    let guesses = this.state.pastGuess.map(guess => <li key={guess}>{guess}</li>)
    return (
      <section className='game'>
        <div className='feedback'>
        <p>{this.state.feedback}</p>
        </div>
        <div className='guess-container'>
        <GameForm disabled={isEnabled} value={this.state.guess} onChange={this.handleGuess} onClick={this.handleSubmit} guessNumber={this.state.guessNumber} />
        </div>
        <div className='guess-list'>
        <ul>
          {guesses}
        </ul>
        </div>
      </section>
    )
  }
  
}
