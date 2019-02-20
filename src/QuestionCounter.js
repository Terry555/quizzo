import React from 'react'

function QuestionCounter(props) {
  return (
    <div>
      { props.questionNumber <= 10 ?
      <h2>Question {props.questionNumber} / 10 </h2>
        :
      null
      }
    </div>
    )
}

export default QuestionCounter;
