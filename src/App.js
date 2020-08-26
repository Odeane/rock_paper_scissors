import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
import './components/image_list/image_list.style.css'
import Popup from './components/popup/Popup'
import Score from './components/scoreboard/Score';


const weapons = ['rock', 'paper', 'scissors']

class App extends Component {
  constructor() {
    super();
    this.state = {
      userOne: '',
      computer: '',
      winner: '',
      userOneScore: 0,
      computerScore: 0
    }
  }

  playGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
    this.setState({
      computer: weapons[Math.floor(Math.random() * 3)],
  
    });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.chooseWinner()
        });
      }
    }, 500);
    
  }
  chooseWinner = () => {
    const { userOne, computer} = this.state;

    if (userOne === computer) {
      return "Even steven, Try again!";
      
    } else if (
      (userOne === "rock" && computer === "scissors") ||
      (userOne === "scissors" && computer === "paper") ||
      (userOne === "paper" && computer === "rock")
    ) {
      this.setState({userOneScore: this.state.userOneScore + 1})
      return "You Won!";
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 })
      return "Loser! Try again";
    }
  };

  render() {
    return (
      <div className="App">
        < Header />
        <div className="dashboard">
          <br />
          <h3>Select Weapon <br /> <br />Player: <span className='weap'>{this.state.userOne}</span></h3>
          <Score userOneScore={this.state.userOneScore} computerScore={this.state.computerScore} />
          <h3>Computer: <span className='weap'>{this.state.computer}</span></h3>
        </div>
        <div className="hands">
          <div id="rock-btn" >
            <img src="/images/rock.png" alt="rock" onClick ={() => this.setState({userOne: weapons[0]}) }/>
          </div>
          <div id='paper-btn'>
            <img src="/images/paper.png" alt="paper" onClick={() => this.setState({ userOne: weapons[1] })}/>
          </div>
          <div id='scissors-btn'>
            <img src='/images/scissors.png' alt="scissors" onClick={() => this.setState({ userOne: weapons[2] })}/>
          </div>
        </div>
        <h1 id='msg'>{this.state.winner}</h1>
        <br /><br />
        <div className='middle' >
          <button className='btn btn2' type='button' onClick={this.playGame} >Play</button>
        </div>
        <Popup />
      </div>

    )
  }
}

export default App;
