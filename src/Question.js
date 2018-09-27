import React, { Component } from 'react';



class Question extends Component {
  render(){
    const question = this.props.question
    // const fixText = question.split(/&#039;|&quot;|&ldquo;|&rdquo;/).join("'").split(/&amp;/).join("&").split(/&Uuml;/).join("Ü")

    return(
      <div>
          <h3>{this.props.fixText(this.props.question)}</h3>
      </div>
    )
  }

}

export default Question
