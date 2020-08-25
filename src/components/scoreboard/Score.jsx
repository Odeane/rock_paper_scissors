import React from 'react'

function Score({ userOneScore, computerScore }) {
  return (
    <div>
      <div className="board">
        <div className="user">
          User: {userOneScore}
        </div>
        <div className="computer">
          Computer: {computerScore}
        </div>
      </div>
    </div>
  )
}

export default Score
