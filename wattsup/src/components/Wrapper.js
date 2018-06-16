import React, { Component } from "react";
import Wattpics from "./wattPics";
import jjwatts from "../jjwatts.json";

const styles = {
    jumbotron: {
       background: "red",
       width: "103%",
       color: "white",
       textAlign: "center",
       marginLeft: "-1.5%",
       fontSize: "50px"
    },
    cards: {
        width: "100%",
        marginLeft: "6%"
    },
    pictures: {
        float: "left"
    }
};
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
            <div className="container-fluid" style={styles.pictures}>
                <div className="jumbotron navbar-brand" style={styles.jumbotron}>Watt Up Clicky Game</div>
                <div className="container-fluid friend-box" style={styles.cards}> 
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