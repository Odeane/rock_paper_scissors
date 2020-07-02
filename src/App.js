import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx'
import ImageList from './components/image_list/image_list.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        <ImageList />
      
      </div>
    )
  }
}

export default App;
