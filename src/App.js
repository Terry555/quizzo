import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'

const API_URL = `https://opentdb.com/api.php?amount=50&category=12`



class App extends Component {

  state = {
    questions: []
  }

  handleClick = (clickedAnswer, correctAnswer) => {
    if(correctAnswer === clickedAnswer) {
      alert("correct!")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quizzo</h1>
        </header>

        <QuestionContainer questions={this.state.questions} handleClick={this.handleClick}/>

      </div>
    );
  }

  componentDidMount(){
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  }

}

export default App;
