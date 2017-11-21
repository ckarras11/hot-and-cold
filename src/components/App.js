import React, { Component } from 'react';
import './App.css';
import Game from './Game'

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restart: false
    }
  }
  restartGame() {
    this.setState({
      restart: true
    });
  }
  render() {
    return (
      <section className="app">
        <header className='title-container'>
          <div className='nav-container'>
            <a onClick={this.restartGame.bind(this)}>+ New Game</a>
          </div>
          <div>
            <h1>HOT or COLD </h1>
          </div>    
        </header>
        <section>
          <Game restart={this.state.restart}/>
        </section>
      </section>
    )
  }
}