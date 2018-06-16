import React from "react";
const styles = {
    card: {
        width: "18rem",
    }
};
const Wattpics = props => (
    
  <div className="card" style={styles.card}>
    <div className="img-container" >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Wattpics;