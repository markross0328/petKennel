import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: initialData,
    };
  }

  // Feed the pet — increase happiness
  handleFeed = (id) => {
    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        const newHappiness = Math.min(char.happiness + 20, 100);
        const isHappy = newHappiness >= 50;
        return {
          ...char,
          happiness: newHappiness,
          status: isHappy ? 'Happy' : 'Still Hungry',
          image: isHappy ? char.happyImage : char.sadImage,
        };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
  };

  // Play with the pet — increase happiness
  handlePlay = (id) => {
    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        const newHappiness = Math.min(char.happiness + 15, 100);
        const isHappy = newHappiness >= 50;
        return {
          ...char,
          happiness: newHappiness,
          status: isHappy ? 'Playful!' : 'Wants More Play',
          image: isHappy ? char.happyImage : char.sadImage,
        };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
  };

  // Neglect — decrease happiness over time
  handleNeglect = (id) => {
    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        const newHappiness = Math.max(char.happiness - 25, 0);
        const isHappy = newHappiness >= 50;
        return {
          ...char,
          happiness: newHappiness,
          status: isHappy ? 'Content' : 'Sad...',
          image: isHappy ? char.happyImage : char.sadImage,
        };
      }
      return char;
    });
    this.setState({ characters: updatedCharacters });
  };

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1> Pet Kennel</h1>
          <p className="subtitle">Take care of your adorable pets!</p>
        </header>

        <div className="children-container">
          {this.state.characters.map((char) => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              type={char.type}
              image={char.image}
              status={char.status}
              happiness={char.happiness}
              onFeed={this.handleFeed}
              onPlay={this.handlePlay}
              onNeglect={this.handleNeglect}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
