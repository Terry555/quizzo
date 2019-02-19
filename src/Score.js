import React from 'react'
import jessbad from './images/jessbad.jpg'
import jessmedium from './images/jessmedium.jpg'
import jessgood from './images/jessgood.jpg'


function Score(props) {

  const displayResults = () => {
    if ((props.score/10 * 100) > 60) {
      return <div><h1>Jess says Great Job!</h1><img src={jessgood} alt="jess_good" width="200"/></div>
    }
    else if ((props.score/10 * 100) > 30 && (props.score/10 * 100) < 70) {
      return <div><h1> Jess says You Did Okay</h1><img src={jessmedium} alt="jess_medium" width="200"/></div>

    }
    else if ((props.score/10 * 100) < 40) {
      return <div><h1> Jess says Oops Not Good</h1><img src={jessbad} alt="jess_bad" width="200"/></div>
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
