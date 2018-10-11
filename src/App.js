import React, { Component } from 'react';
import Header from './containers/Header/header';
import Nav from './containers/Nav/nav';
import './App.css';
import Home from './containers/Home/home';
import Email from './components/Home-Ad/Email-Capture/email';
import Footer from './containers/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Home></Home>
        <div className="mobile-only">
          <Email></Email>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
