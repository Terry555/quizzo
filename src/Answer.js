import React, { Component } from 'react';


class Answer extends Component {
  shuffle = (array) => {
    var ctr = array.length, temp, index;
    // While there are elements in the array
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

  render(){

    this.shuffle(this.props.incorrect_answers.push(this.props.correct_answer))

    return(
      <div>
        {this.shuffle(this.props.incorrect_answers).map(answer => <button onClick={() => this.props.handleClick(answer, this.props.correct_answer)}>{this.props.fixText(answer)}</button>)}
      </div>
    )
  }

}

export default Answer
