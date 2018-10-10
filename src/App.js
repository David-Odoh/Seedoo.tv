import React, { Component } from 'react';
import Header from './containers/Header/header';
import Nav from './containers/Nav/nav';
import './App.css';
import Home from './containers/Home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Home></Home>
      </div>
    );
  }
}

export default App;
