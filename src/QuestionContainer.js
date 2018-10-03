import React, { Component } from 'react';
import Question from './Question'
import Answer from './Answer'
import v4 from 'uuid'

class QuestionContainer extends Component {

  fixText = (text) => {
    return text.split(/&#039;|&quot;|&ldquo;|&rdquo;/).join("'").split(/&amp;/).join("&").split(/&Uuml;/).join("Ü")
  }

  render() {
    const questionAnswerIterator = this.props.displayQuestions.map((question,idx) => {
      return ([<Question key={idx} {...question} fixText={this.fixText} />,
      <Answer key={v4()} {...question} fixText={this.fixText} handleClick={this.props.handleClick} />])
      })
    return(
      <div>
        {questionAnswerIterator}
      </div>
    )
    }
  }

export default QuestionContainer;
