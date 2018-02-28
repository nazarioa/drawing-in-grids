import React, { Component } from 'react';
import Cell from './Cell/Cell';

import './App.css';

class App extends Component {

  render() {
    let cells = [];
    for (let i = 0; i < 64; i++) {
      cells.push(<Cell position={i} className="cell-{i}"/>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Draw!</h1>
        </header>
        <div className="App-grid">
          {cells}
        </div>
      </div>
    );
  }
}

export default App;
