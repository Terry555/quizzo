import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'
import Score from './Score'

const API_URL = `https://opentdb.com/api.php?amount=50&category=`
const MUSIC_QUESTIONS = 12
const CARTOON_QUESTIONS = 32


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
        <QuestionContainer displayQuestions={this.displayQuestions()} handleClick={this.handleClick}/>
        <Score score={this.state.score}/>

      </div>
    );
  }

  componentDidMount(){
    fetch(API_URL + CARTOON_QUESTIONS)
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  }

}

export default App;
