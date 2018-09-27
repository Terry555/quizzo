import React, { Component } from 'react';


class Answer extends Component {

  render(){
    this.props.incorrect_answers.push(this.props.correct_answer)

    console.log(this.props.incorrect_answers)

    return(
      <div>
        {this.props.incorrect_answers.map(incorrect_answer => <p>{incorrect_answer}</p>)}
      </div>
    )
  }

}

export default Answer
