import React, { Component } from 'react';
import Header from './containers/Header/header';
import Nav from './containers/Nav/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
