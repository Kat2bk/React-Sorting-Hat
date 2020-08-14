import React from 'react';
import styled from "styled-components";
import SortingModal from "./components/SortingModal";
import {questions} from "./data";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      question: "",
      answerOption: [],
      answerCount: {},
      answer: "",
      result: ""
    }
  }

  render() {
    return (
      <div className="Sorting-Main">
      <SortingModal />
      </div>
    )
  }
}

export default App;
