import React, { Component } from 'react';
//import "../styles/Navbar.css";

const styles = {
  navey: {
     background: "darkblue",
     width: "100%",
     color: "white",
     textAlign: "center",
    
  }
};
export default class Navbar extends Component {

// the scores are passed in and updated at change
  render() {
    return(
      <div>
        <nav style={styles.navey}>
          <div className="row">
            <div className="nav-item col-4"> <a href="/ReactMemoryGame/">Clicky</a></div>
            <div className="nav-item col-4 my-auto"> Click a JJ to begin </div>
            <div className="nav-item col-4 my-auto"> Current Score : {this.props.score} | Top Score : {this.props.topScore} </div>
          </div>
        </nav>
      </div>
    )
  }
}
