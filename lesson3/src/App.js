import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47 + this.props.increment
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
     return {meaningOfLife: prevState.meaningOfLife + 1}
    }, () => {
      console.log(this.state.meaningOfLife)
    })
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.meaningOfLife}
        </p>
        <button onClick={this.handleClick}
        >
          Increment
        </button>
      </header>
    </div>)
  }
}

