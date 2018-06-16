import React, { Component } from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";



//set initial state
class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    score: 0,
    topScore: 0,
    clicked: []
  }
}

//game function
game = (id) => {
  //if you've clicked this one before throw an alert
  if (this.state.clicked.includes(id)) {
    alert("Uh oh! You've already clicked on this JJ");
    this.setState({ score: 0 }); 
    this.setState({clicked:[]});
    } 
    //else increase score +1 and add id to clicked []
    else 
    {
    this.setState({clicked: [...this.state.clicked, id]});
    const nextScore = this.state.score + 1;
    this.setState({
    score: nextScore
  });
// if its better than top score replace top score
  if (nextScore > this.state.topScore) {
    this.setState({topScore: nextScore});
  }
if (nextScore === 11) {
  alert("You win!");
  this.setState({score:0});
  this.setState({clicked:[]});
  }
}
};
//render
render() {
  return (
    <div>
         <Header score={this.state.score} topScore={this.state.topScore}>Watts Up Clicky Game!!!</Header>
    <Wrapper
      game={this.game}
    />
    </div>
  )
}
}

export default App;

