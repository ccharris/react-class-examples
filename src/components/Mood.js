import React, { Component } from 'react'

export default class Mood extends Component {
  constructor(){
    super()
    this.state = {
      mood: '',
      showText: false
    }
  }

  currentMood = (e) => {
    console.log('current mood is called')
    this.setState({mood: e.target.value})
  }

  submitMethod = (e) => {
    e.preventDefault()
    this.setState({showText: true})
  }

  render(){
    return(
      <div>
        <p>How are you today?</p>
        <form onSubmit={this.submitMethod}>
          <input onChange={this.currentMood} />
          <button type="submit">Submit</button>
        </form>
        {this.state.showText && 
        <p>{this.state.mood}</p> }
      </div>
    )
  }
}