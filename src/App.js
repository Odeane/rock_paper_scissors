import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
// import './components/image_list/image_list.style.css'


const weapons = ['rock', 'paper', 'scissors']

class App extends Component {
  constructor() {
    super();
    this.state = {
      userOne: '',
      computer: ''
    }
  }

  playGame = () => {
    this.setState({
      computer: weapons[Math.floor(Math.random() * 3)]
    });
  }

  

  



  render() {
    return (
      <div className="App">
        < Header />

        <div className="hands">

          <div id="rock-btn" >
            <img src="/images/rock.png" alt="rock" onClick ={() => this.setState({userOne: weapons[0]}) }/>
          </div>

          <div id='paper-btn'>
            <img src="/images/paper.png" alt="paper" onClick={() => this.setState({ userOne: weapons[1] })}/>
          </div>

          <div id='scissors-btn'>
            <img src='/images/scissors.png' alt="scissors" onClick={() => this.setState({ userOne: weapons[3] })}/>
          </div>


        </div>
        <h1>{this.state.computer}</h1>
        <button type='button' onClick={this.playGame} >Play</button>
      </div>

    )
  }
}

export default App;
