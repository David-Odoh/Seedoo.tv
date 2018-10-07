import React, { Component } from 'react';
import Header from './containers/Header/header';
import Nav from './containers/Nav/nav';
import Highlight from './containers/Hightlights/highlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Highlight></Highlight>
      </div>
    );
  }
}

export default App;
