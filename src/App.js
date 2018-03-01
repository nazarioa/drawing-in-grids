import React, { Component } from 'react';
import Cell from './Cell/Cell';

import './App.css';

class App extends Component {

  render() {
    const cellWidthHeight = 20;

    let availableSpace = {
      width: window.innerWidth || document.body.clientWidth,
      height: (window.innerHeight || document.body.clientHeight) - 100
      // 100  = 60 (.AppHeader height)
      //      + 10*2 (.App-header padding)
      //      + 10*2 (.App-grid padding);
    }

    let gridWidth = Math.round(availableSpace.width / cellWidthHeight);
    let gridHeight = Math.round(availableSpace.height / cellWidthHeight);

    let gridTemplateStyle = {
      gridTemplateRows: 'repeat(' + gridHeight + ', ' + cellWidthHeight + 'px)',
      gridTemplateColumns: 'repeat(' + gridWidth + ', ' + cellWidthHeight + 'px)',
      width: (gridWidth * cellWidthHeight) + 'px',
      height: (gridHeight * cellWidthHeight) + 'px'
    };

    let cellStyle = {
      width: cellWidthHeight + 'px',
      height: cellWidthHeight + 'px'
    };

    let cells = [];
    for (let i = 0; i < (gridWidth * gridHeight); i++) {
      cells.push(<Cell key={i} className="cell-{i}" style={cellStyle} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Draw!</h1>
        </header>
        <div className="App-grid" style={gridTemplateStyle}>
          {cells}
        </div>
      </div>
    );
  }
}

export default App;
