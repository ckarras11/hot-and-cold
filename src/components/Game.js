import React, { Component } from 'react';
import './Game.css';
import GameForm from './GameForm'
import initalState from './initialState'
const uuid = require('uuid-v4');

export default class GuessContainer extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleGuess=this.handleGuess.bind(this);
    this.handleGuess=this.handleGuess.bind(this);
    this.state = Object.assign({},initalState)
    
  }
  
  componentWillReceiveProps(props) {
    if(props.restart) {
      this.setState(initalState);
      this.setState({
        targetNumber: Math.floor(Math.random() * 101),
        pastGuess: [],
      })
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
        feedback: 'Correct! Click new game to play again.',
        classes: 'submit js-hide-display',
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
    let guesses = this.state.pastGuess.map(guess => <li key={uuid()}>{guess}</li>)
    return (
      <section className='game'>
        <div className='feedback'>
        <p>{this.state.feedback}</p>
        </div>
        <div className='guess-container'>
        <GameForm classes={this.state.classes} disabled={!isEnabled} value={this.state.guess} onChange={this.handleGuess} onClick={this.handleSubmit} guessNumber={this.state.guessNumber} />
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
