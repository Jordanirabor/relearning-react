import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankeinstein",
          id: 1
        },
        {
          name: "Dracula",
          id: 2
        },
        {
          name: "Zombie",
          id: 3
        }
      ]
    }

  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)}
      </div>
    );
  }

}

