import React, { Component } from 'react';



class Question extends Component {
  render(){
    const question = this.props.question
    const fixApostrophe = question.split(/&#039;|&quot;|&ldquo;|&rdquo;/).join("'")
    const fixAmpersand = fixApostrophe.split(/&amp;/).join("&")
    const fixUmlaut = fixAmpersand.split(/&Uuml;/).join("Ü")
    return(
      <div>
          <h3>{fixUmlaut}</h3>

      </div>
    )
  }

}

export default Question
