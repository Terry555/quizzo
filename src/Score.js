import React from 'react'
import goldstar from './images/gold_star.svg'
import checkmark from './images/check_mark.png'
import thumbsdown from './images/thumbs_down.png'




function Score(props) {

  const displayResults = () => {
    if ((props.score/10 * 100) > 60) {
      return <div><h1>Great Job!</h1><img src={goldstar} alt="gold_star" width="200"/></div>
    }
    else if ((props.score/10 * 100) > 30 && (props.score/10 * 100) < 70) {
      return <div><h1>You Did Okay!</h1><img src={checkmark} alt="check_mark" width="200"/></div>

    }
    else if ((props.score/10 * 100) < 40) {
      return <div><h1>Try Again!</h1><img src={thumbsdown} alt="thumbs_down" width="200"/></div>
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
