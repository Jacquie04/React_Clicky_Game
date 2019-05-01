import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import got from "./got.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    got
  };

 
 // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Game of Thrones Character Tiles</Title>
        {this.state.got.map(got => (
          <Card
            id={got.id}
            key={got.id}
            name={got.name}
            image={got.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
