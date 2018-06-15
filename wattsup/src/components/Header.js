import React from "react";


const styles = {
  subtitle: {
    background: "red",
    color: "white"
  }
};

// We use JSX curly braces to evaluate the style object

const Header = props => (
  <div style={styles.subtitle}>
    
    <a className="navbar-brand" href="#">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
      <h5>Click an image to begin!</h5>
  
    <div>
      score:
    </div>

 </div>
);

export default Header;
