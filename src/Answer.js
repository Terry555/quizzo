import React, { Component } from 'react';


class Answer extends Component {
  //
  // state = {
  //   answers: [this.props.wrongAnswers, this.props.rightanswer]
  // }


  shuffle = (array) => {
    let ctr = array.length, temp, index;
    // While there are elements in the array
    if (array.length > 2) {
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }
    else {
      return ["True", "False"]
    }
  }

  render(){
    console.log(this.props)
    let newArray = [...this.props.incorrect_answers]
    let evenNewerArray = [...newArray, this.props.correct_answer]
    this.shuffle(evenNewerArray)
    // this.shuffle(this.props.incorrect_answers.push(this.props.correct_answer))
    // {this.shuffle(evenNewerArray).map(answer => <button onClick={() => this.props.handleClick(answer, this.props.correct_answer)}>{this.props.fixText(answer)}</button>)}


    return(
      <div>
        {this.shuffle(evenNewerArray).map((answer, idx) => {
          return <button key={idx} onClick={() => this.props.handleClick(answer, this.props.correct_answer)}>{this.props.fixText(answer)}</button>})}
      </div>
    )
  }

}

export default Answer
