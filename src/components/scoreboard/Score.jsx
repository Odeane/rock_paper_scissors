import React from 'react'
import './score.style.css'

function Score({ userOneScore, computerScore }) {
  return (
    <div>
      <div className="board">
        <div className="text">
          <div className="user">
            User: {userOneScore}
          </div>
          <div className="computer">
            Computer: {computerScore}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Score
