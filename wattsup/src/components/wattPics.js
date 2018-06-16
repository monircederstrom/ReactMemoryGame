import React, { Component } from "react";
const styles = {
    card: {
        width: "18rem",
    }
};
export default class Wattpics extends Component  {
    render() {
        return(
            <img className="img-fluid friend" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}