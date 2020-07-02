import React from 'react';
import './image_list.style.css'

const ImageList = () => {
  return (

    <div className = "hands">
      
      <div id="rock-btn">
        <img src = "/images/rock.png" alt=""/>
      </div>
      
      <div id='paper-btn'>
        <img src = "/images/paper.png"/>
      </div>

      <div id='scissors-btn'>
        <img src ='/images/scissors.png'></img>
      </div>
      
      
    </div>
  )
}

export default ImageList; 