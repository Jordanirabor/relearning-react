import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{

  constructor(){
    super()
    this.state = {
      meaningOfLife: 47
    }
  }

  handleClick = () => {
    this.setState({meaningOfLife: this.state.meaningOfLife + 1})
  }

  render(){
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
    </div>)}
}

