import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import got from "./got.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    got,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.got.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  };

  clickCount = id => {
    this.state.got.find((o, i) => {
      if (o.id === id) {
        if(got[i].count === 0){
          got[i].count = got[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.got.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  };

 
 // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Game of Thrones Character Tiles</Title>
        {this.state.got.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
