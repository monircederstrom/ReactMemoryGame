import React, { Component } from "react";
import Navbar from "./Navbar";
//import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding
// We use JSX curly braces to evaluate the style object
export default class Header extends Component {
render() {
  return(<header className="header"> <Navbar score={this.props.score} topScore={this.props.topScore}/> </header>)
  const Header = props => <h1 className="header">{props.children}</h1>;
}
};