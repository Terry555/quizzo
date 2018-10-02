import React from 'react'

function Score(props) {
  return (
    <div>
      <h2>Score: {props.score} </h2>
      {props.questionNumber === 11 ?
      <h2>Percent Correct: {props.score/10 * 100}%</h2> :
      null
      }
    </div>
  )
}

export default Score;
