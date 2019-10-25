import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycles from './components/life-cycle/life-cycle.jsx'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      showLifeCycleMethods: true,
      text: ''
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.setState(state => ({showLifeCycleMethods: !state.showLifeCycleMethods}))}>
          Toggle LifeCycle Methods
        </button>
        <button onClick={() => this.setState(state => ({
          text: state.text + ' _hello'
        }))}>
          Append string
        </button>

        {this.state.text}
      {this.state.showLifeCycleMethods ? <LifeCycles text={this.state.text} /> : null}
      </header>
    </div>
  )
  }

}

export default App;
