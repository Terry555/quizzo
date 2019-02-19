import React, { Component } from 'react';
import logo from './info.svg';
import './App.css';
import QuestionContainer from './QuestionContainer'
import Score from './Score'
import CategoryContainer from './CategoryContainer'
import QuestionCounter from './QuestionCounter'
import TopicSearch from './TopicSearch'
import history from './images/history.jpeg'
import natural_science from './images/natural_science.jpg'
import politics from './images/politics.png'
import television from './images/television.png'
import theater from './images/theater.jpg'
import animals from './images/animals.jpg'
import books from './images/books.jpeg'
import cartoons from './images/cartoons.jpg'
import celebrities from './images/celebrities.jpg'
import comics from './images/comics.jpg'
import film from './images/film.svg'
import video_games from './images/video_games.jpg'
import art from './images/art.jpg'
import boardgames from './images/boardgames.svg'
import computers from './images/computers.jpg'
import geography from './images/geography.jpg'
import music from './images/music.jpeg'
import sports from './images/sports.jpg'






const API_URL = `https://opentdb.com/api.php?amount=10&category=`
const categoryObj = [{category: 'Books', number: 10, image_url:books}, {category: 'Film', number: 11, image_url:film},
                    {category: 'Music', number: 12, image_url:music}, {category: 'Video Games', number: 15, image_url:video_games},
                    {category: 'Television', number: 14, image_url:television}, {category: 'Geography', number: 22, image_url:geography},
                    {category: 'History', number: 23, image_url:history}, {category: 'Natural Science', number: 17, image_url:natural_science},
                    {category: 'Computers', number: 18, image_url:computers}, {category: 'Cartoons', number: 32, image_url:cartoons},
                    {category: 'Politics', number: 24, image_url:politics}, {category: 'Art', number: 25, image_url:art},
                    {category: 'Celebrities', number: 26, image_url:celebrities}, {category: 'Animals', number: 27, image_url:animals},
                    {category: 'Sports', number: 21, image_url:sports}, {category: 'Musicals/Theater', number: 13, image_url:theater},
                    {category: 'Comics', number: 29, image_url:comics}, {category: 'Board Games', number: 16, image_url:boardgames}]


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
