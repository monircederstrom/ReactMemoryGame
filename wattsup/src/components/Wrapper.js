import React, { Component } from "react";
import Wattpics from "./wattPics";
import jjwatts from "../jjwatts.json";


export default class Wrapper extends Component {
// randomize wattpics
wattaMix = (a) => {
    var j, x, i;
    for (i = a.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
handleClick = (id) => {
    this.props.game(id);
    this.wattaMix(jjwatts)
}
render() {
    return(
        <div className="wrapper">
            <div className="container-fluid">
                <div className="jumbotron navbar-brand">Click a JJ to begin!</div>
                <div className="container-fluid friend-box"> 
                    {jjwatts.map(image =>
                    <Wattpics
            src = {image.src}
            alt = {image.name}
            id = {image.id}
            key = {image.id}
            handleClick= {this.handleClick}
            />)}
            </div>
            </div>
        </div>
    )
}
}