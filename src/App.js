import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
import './components/image_list/image_list.style.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      userScore: 0
    }
  }





  render() {
    return (
      <div className="App">
        < Header />
       
       
        <div className="hands">

          <div id="rock-btn" onClick={() => this.setState({ string: 'hey' })} >
            <img src="/images/rock.png" alt="" />
          </div>

          <div id='paper-btn'>
            <img src="/images/paper.png" />
          </div>

          <div id='scissors-btn'>
            <img src='/images/scissors.png'></img>
          </div>


        </div>
        

        <p>{this.state.score}</p>
      </div>
    )
  }
}

export default App;
