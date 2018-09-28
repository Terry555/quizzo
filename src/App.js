import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'
import Score from './Score'
import CategoryContainer from './CategoryContainer'


const API_URL = `https://opentdb.com/api.php?amount=50&category=`
const categoryObj = [{'Books': 10, 'Film': 11}]

  //
  // [{'Books': 10}, {'Film': 11}, {'Music': 12}, {'Video_Games': 15},
  //   {'Television': 14}, {'Geography': 22}, {'History': 23}, {'Natural_Science': 17}, {'Computers': 18}, {'Cartoons': 32}]


class App extends Component {

  state = {
    questions: [],
    questionsIndex: 0,
    score: 0
  }

  displayQuestions = () => {
    let questionsToDisplay = (this.state.questions.slice(this.state.questionsIndex, this.state.questionsIndex + 1))
    return questionsToDisplay
  }


  handleClick = (clickedAnswer, correctAnswer) => {
    if(correctAnswer === clickedAnswer) {
      this.setState ({
        score: this.state.score + 1
      })
    }
      this.setState({
        questionsIndex: this.state.questionsIndex + 1
      })
  }

  componentDidUpdate() {
    this.displayQuestions()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quizzo</h1>
        </header>

        <CategoryContainer category={categoryObj}/>
        <QuestionContainer displayQuestions={this.displayQuestions()} handleClick={this.handleClick}/>
        <Score score={this.state.score}/>

      </div>
    );
  }

  componentDidMount(){
    fetch(API_URL + '32')
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  }

}

export default App;
