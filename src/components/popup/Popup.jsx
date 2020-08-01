import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './popup.style.css'

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  componentDidMount() {
    this.openModal()
  }

  render() {
    return (
      <section >
        <div >
          <Modal visible={this.state.visible} width="400" height="300" >
            <div className='modal'>
              <h1 id='rules'>Instructions</h1><br/>
              <p className='rlist'>Click on weapon to select</p><br />
              <p className='rlist'>Press PLAY</p><br />
              <p className='rlist'>Enjoy!!!</p><br />

              <button ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>
            </div>
          </Modal>
        </div>
        
      </section>
    );
  }
}