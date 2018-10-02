import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'
import Score from './Score'
import CategoryContainer from './CategoryContainer'
import QuestionCounter from './QuestionCounter'


const API_URL = `https://opentdb.com/api.php?amount=10&category=`
const categoryObj = [{category: 'Books', number: 10}, {category: 'Film', number: 11},
                    {category: 'Music', number: 12}, {category: 'Video Games', number: 15},
                    {category: 'Television', number: 14}, {category: 'Geography', number: 22},
                    {category: 'History', number: 23}, {category: 'Natural Science', number: 17},
                    {category: 'Computers', number: 18}, {category: 'Cartoons', number: 32}]


class App extends Component {

  state = {
    questions: [],
    questionsIndex: 0,
    score: 0,
    cat_num: '',
    clicked: false,
    questionNumber: 1
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
        questionsIndex: this.state.questionsIndex + 1,
        questionNumber: this.state.questionNumber + 1
      })
  }


  componentDidUpdate() {
    this.displayQuestions()
  }

  handleCategoryClick = (number, event) => {
    event.preventDefault()
    this.setState({
      cat_num: number,
      clicked: true
    },()=> {

    fetch(API_URL + this.state.cat_num)
    .then(response => response.json())
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quizzo</h1>
        </header>

        {this.state.clicked ? null : <CategoryContainer category={categoryObj} handleCategoryClick={this.handleCategoryClick}/>}
        <QuestionContainer displayQuestions={this.displayQuestions()} handleClick={this.handleClick}/>
        {this.state.clicked ? <Score score={this.state.score} questionNumber={this.state.questionNumber}/> : null}
        {this.state.clicked ? <QuestionCounter questionNumber={this.state.questionNumber}/> : null}
      </div>
    );
  }


}

export default App;
