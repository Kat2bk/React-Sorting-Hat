import React from 'react';
import styled from "styled-components";
import SortingModal from "./components/SortingModal";
import {questions} from "./data";

// six questions, counting will tally them, question for string
// answer string, answer array

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      question: "",
      answer: "",
      answerOption: [],
      answerCount: {},
      result: "",
      modalState: false
    }
  }

  shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // while there are remaining elements
    while (0 !== currentIndex) {
      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // swap it with the current
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount() {
    const shuffledAnswers = questions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: questions[0].question,
      answerOption: shuffledAnswers[0]
    })

    this.setState({
      modalState: true
    })
  }


  render() {
    return (
      <div className="Sorting-Main">
      <SortingModal modalState={this.state.modalState}/>
      </div>
    )
  }
}

export default App;
