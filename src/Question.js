import React, { Component } from 'react';



class Question extends Component {
  render(){
    // const question = this.props.question
    // const fixText = question.split(/&#039;|&quot;|&ldquo;|&rdquo;/).join("'").split(/&amp;/).join("&").split(/&Uuml;/).join("Ü")

    return(
      <div className='content'>
          <div className='header'>{this.props.fixText(this.props.question)}</div>
      </div>
    )
  }

}

export default Question
