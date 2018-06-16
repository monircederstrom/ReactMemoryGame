import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Wattpics from "./components/wattPics";
import Wrapper from "./components/Wrapper";
import jjwatts from "./jjwatts.json";
import "./App.css";


//set initial state
class App extends Component {
  state = {
    jjwatts,
    score: 0,
    highscore: 0
  };

//game function
game = () => {
  if (this.state.score > this.state.topscore) {
    this.setState({ topscore: this.state.score }, function() {
      console.log(this.state.topscore);
    });
  }
  this.state.jjwatts.forEach(Wattpics => {
    Wattpics.count = 0;
  });
  this.setState({score: 0});
  return true;
};
clickCount = id => {
  this.state.jjwatts.find((o, i) => {
    if (o.id === id) {
      if(jjwatts[i].count === 0){
        jjwatts[i].count = jjwatts[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.jjwatts.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.game();
      }
    }
  });
}
//render
render() {
  return (
    <div>
         <Header score={this.state.score} topscore={this.state.topscore}>Watts Up Clicky Game</Header>
    <Wrapper>
  
   
      {this.state.jjwatts.map(card => (
       
        <Wattpics className="cards"
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
     
    </Wrapper>
    </div>
  );
}
}

export default App;

