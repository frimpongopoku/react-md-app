import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Material Design Bootstrap App</h1>
        </header>
        <button className = "btn btn-danger" onClick={()=>{ alert("MD: I am cool huh?")}}>Click Me</button>
      </div>
    );
  }
}

export default App;
