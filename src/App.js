import React, { Component } from 'react';

import Login from './Login';
import AppBarCustom from './components/AppBar';

class App extends Component {

  render(){
    return (
      <div className="App">

        <AppBarCustom />

        <Login />

      </div>
    );
  }
}

export default App;
