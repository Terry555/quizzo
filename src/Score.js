import React from 'react'
import jessbad from './images/jessbad.jpg'
import jessmedium from './images/jessmedium.jpg'
import jessgood from './images/jessgood.jpg'


function Score(props) {

  const displayResults = () => {
    if ((props.score/10 * 100) > 60) {
      return <h1> Jess says Great Job! <img src={jessgood} alt="jess_good" width="200"/></h1>
    }
    else if ((props.score/10 * 100) > 30 && (props.score/10 * 100) < 70) {
      return <h1> Jess says You Did Okay <img src={jessmedium} alt="jess_medium" width="200"/></h1>

    }
    else if ((props.score/10 * 100) < 40) {
      return <h1> Jess says Oops Not Good <img src={jessbad} alt="jess_bad" width="200"/></h1>
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
