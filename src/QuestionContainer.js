import React, { Component } from 'react';
import Question from './Question'
import Answer from './Answer'
import v4 from 'uuid'

const QuestionContainer = (props) => {

    return(
      <div>
        {
          props.questions.map((question,idx) => {
          return ([<Question key={idx} {...question}/>,
          <Answer key={idx} {...question}/>])
        })
      }
      </div>
    )
  }

export default QuestionContainer;
