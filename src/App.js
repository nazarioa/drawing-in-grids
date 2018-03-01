import React, { Component } from 'react';
import Cell from './Cell/Cell';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellWidthHeight: 20,
      availableSpace: {
        width: 400,
        height: 400
      }
    };

    this.updateGridSize = this.updateGridSize.bind(this);
  }

  updateGridSize() {
    this.setState({
      cellWidthHeight: 20,
      availableSpace: {
        width: (window.innerWidth || document.body.clientWidth) - 100,
        height: (window.innerHeight || document.body.clientHeight) - 200
        // 200  = 60 (.AppHeader height)
        //      + 10*2 (.App-header padding)
        //      + 10*2 (.App-grid margin);
        //      + 50*2 (.App-grid padding);
      }
    });
  }


  componentWillMount() {
       this.updateGridSize();
   }

   componentDidMount() {
       window.addEventListener("resize", this.updateGridSize);
   }

   componentWillUnmount() {
       window.removeEventListener("resize", this.updateGridSize);
   }

  render() {
    const numberCellsVertically = Math.round(this.state.availableSpace.width / this.state.cellWidthHeight);
    const numberCellsHorizontally = Math.round(this.state.availableSpace.height / this.state.cellWidthHeight);

    const gridTemplateStyle = {
      gridTemplateRows: 'repeat(' + numberCellsHorizontally + ', ' + this.state.cellWidthHeight + 'px)',
      gridTemplateColumns: 'repeat(' + numberCellsVertically + ', ' + this.state.cellWidthHeight + 'px)',
      width: (numberCellsVertically * this.state.cellWidthHeight) + 'px',
      height: (numberCellsHorizontally * this.state.cellWidthHeight) + 'px'
    };

    const cellStyle = {
      width: this.state.cellWidthHeight + 'px',
      height: this.state.cellWidthHeight + 'px'
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
