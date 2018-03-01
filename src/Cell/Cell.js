import React, { Component } from 'react';
import classnames from 'classnames';

import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};

    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
  }


  handleOnHover(e) {
    this.setState({active: true});
  }

  handleOnMouseOut(e) {
    let p = setTimeout(() => this.setState({active: false}), 6000);
  }

  render() {
    let classes = classnames('Cell-pulp', {active: !!this.state.active})

    return (
      <div className="Cell" onMouseLeave={this.handleOnMouseOut} onMouseEnter={this.handleOnHover}>
        <div className={classes}></div>
      </div>
    );
  }
}

export default Cell;
