import React from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import "./App.css"

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
      <input type="search" placeholder="search for monsters" onChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

