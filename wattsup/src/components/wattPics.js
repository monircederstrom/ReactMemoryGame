import React, { Component } from "react";
const styles = {
    images: {
        width: "250px",
        height: "200px"
    }
}
export default class Wattpics extends Component  {
    render() {
        return(
            <img style={styles.images} className="img-fluid friend" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}