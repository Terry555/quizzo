import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'
import Score from './Score'
import CategoryContainer from './CategoryContainer'
import QuestionCounter from './QuestionCounter'
import TopicSearch from './TopicSearch'

const API_URL = `https://opentdb.com/api.php?amount=10&category=`
const categoryObj = [{category: 'Books', number: 10}, {category: 'Film', number: 11},
                    {category: 'Music', number: 12}, {category: 'Video Games', number: 15},
                    {category: 'Television', number: 14}, {category: 'Geography', number: 22},
                    {category: 'History', number: 23}, {category: 'Natural Science', number: 17},
                    {category: 'Computers', number: 18}, {category: 'Cartoons', number: 32},
                    {category: 'Politics', number: 24}, {category: 'Art', number: 25},
                    {category: 'Celebrities', number: 26}, {category: 'Animals', number: 27},
                    {category: 'Sports', number: 21}, {category: 'Musicals/Theater', number: 13},
                    {category: 'Comics', number: 29}, {category: 'Board Games', number: 16}]


class App extends Component {

  state = {
    questions: [],
    questionsIndex: 0,
    score: 0,
    cat_num: '',
    clicked: false,
    questionNumber: 1,
    searchTerm: ''
  }

  displayQuestions = () => {
    let questionsToDisplay = (this.state.questions.slice(this.state.questionsIndex, this.state.questionsIndex + 1))
    return questionsToDisplay
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterTopics = () => {
    return categoryObj.filter(category => category.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  topicsToDisplay = () => {
    return this.state.searchTerm ? this.filterTopics() : categoryObj
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
        {this.state.clicked ? null : <TopicSearch handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>}
        {this.state.clicked ? null : <CategoryContainer category={this.topicsToDisplay()} handleCategoryClick={this.handleCategoryClick}/>}
        <QuestionContainer displayQuestions={this.displayQuestions()} handleClick={this.handleClick}/>
        {this.state.clicked ? <Score score={this.state.score} questionNumber={this.state.questionNumber}/> : null}
        {this.state.clicked ? <QuestionCounter questionNumber={this.state.questionNumber}/> : null}
      </div>
    );
  }


}

export default App;
