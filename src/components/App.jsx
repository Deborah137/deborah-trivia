import React, { Component, useState } from "react";
import { isPropertySignature } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

export function Question(props) {
  return <div> {props.question}!</div>;
}

function App() {
  return (
    <div className="app">
      Trivia!
      <Question question={data[0].question.text} />
      <Question question="question two goes here" />
    </div>
  );
  // is this okay
  let questionumber = 0;
}

export default App;
