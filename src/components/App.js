import React, { Component } from 'react';
import './App.css';
import Game from './Game'

export default class App extends React.Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section className="app">
        <header className='title-container'>
          <div className='nav-container'>
            <h2>What?</h2>
            <h2>+ New Game</h2>
          </div>
          <div>
            <h1>HOT or COLD </h1>
          </div>    
        </header>
        <section>
          <Game />
        </section>
      </section>
    )
  }
}