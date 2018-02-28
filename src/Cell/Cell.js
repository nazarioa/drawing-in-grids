import React, { Component } from 'react';

import './Cell.css';

class Cell extends Component {
  render() {
    return (
      <div className="Cell">
        <div className="Cell-pulp"></div>
      </div>
    );
  }
}

export default Cell;
