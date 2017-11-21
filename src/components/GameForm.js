import React, { Component } from 'react';
import './GameForm.css';

export default function GameForm(props){

  return (
    <section className='game-form-container'>
        <form className='game-form'>
            <input value={props.value} onChange={props.onChange} type='number' placeholder='Enter your Guess' />
            <button onClick={props.onClick} className={props.classes} disabled={props.disabled} >Submit</button>
        </form>
        <p>Guess: {props.guessNumber}</p>
    </section>
  )
}