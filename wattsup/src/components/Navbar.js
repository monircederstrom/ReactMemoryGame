import React, { Component } from 'react';
//import "../styles/Navbar.css";

export default class Navbar extends Component {

// the scores are passed in and updated at change
  render() {
    return(
      <div>
        <nav>
          <div className="row">
            <div className="nav-item col-4"> <p className="navbar-brand my-auto">Clicky</p> </div>
            <div className="nav-item col-4 my-auto"> Click a JJ to begin </div>
            <div className="nav-item col-4 my-auto"> Current Score : {this.props.score} | Top Score : {this.props.topScore} </div>
          </div>
        </nav>
      </div>
    )
  }
}
