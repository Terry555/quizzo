import React from 'react'

function Score(props) {

  const displayResults = () => {
    if ((props.score/10 * 100) > 60) {
      return "Excellent Job!!"
    }
    else if ((props.score/10 * 100) > 30 && (props.score/10 * 100) < 70) {
      return "Hmmmmmmmm you did okay...."
    }
    else if ((props.score/10 * 100) < 40) {
      return "Great job said no one"
    }
    else {
      return null
    }
  }

  return (
    <div>
      <h2>Score: {props.score} </h2>
      {props.questionNumber === 11 ? <div>
      <h2>Percent Correct: {props.score/10 * 100}%</h2>
        <h2>{displayResults()}</h2> </div>: null
      }
    </div>
  )
}

export default Score;
