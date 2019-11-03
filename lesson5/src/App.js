import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';

function Hats() {
  return (
    <div>
      HATS
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
