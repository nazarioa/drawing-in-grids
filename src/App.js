import React, { Component } from 'react';
import Cell from './Cell/Cell';

import './App.css';

class App extends Component {

  render() {
    const cellWidthHeight = 20;

    const availableSpace = {
      width: window.innerWidth || document.body.clientWidth,
      height: (window.innerHeight || document.body.clientHeight) - 100
      // 100  = 60 (.AppHeader height)
      //      + 10*2 (.App-header padding)
      //      + 10*2 (.App-grid padding);
    }

    const numberCellsVertically = Math.round(availableSpace.width / cellWidthHeight);
    const numberCellsHorizontally = Math.round(availableSpace.height / cellWidthHeight);

    const gridTemplateStyle = {
      gridTemplateRows: 'repeat(' + numberCellsHorizontally + ', ' + cellWidthHeight + 'px)',
      gridTemplateColumns: 'repeat(' + numberCellsVertically + ', ' + cellWidthHeight + 'px)',
      width: (numberCellsVertically * cellWidthHeight) + 'px',
      height: (numberCellsHorizontally * cellWidthHeight) + 'px'
    };

    const cellStyle = {
      width: cellWidthHeight + 'px',
      height: cellWidthHeight + 'px'
    };

    const cells = [];
    for (let i = 0; i < (numberCellsVertically * numberCellsHorizontally); i++) {
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
