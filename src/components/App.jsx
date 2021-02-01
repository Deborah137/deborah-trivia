import React, { Component, useState } from "react";
import { isPropertySignature } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

//- [ ] Pass props for the answer choices into `<Question />`.

export function Question(props) {
  return (
    <div>
      <div>{props.question}</div>
      <Answer answer={props.answer} />
    </div>
  );
}

export function NextQuestion(props) {
  return <button>Next Question</button>;
}

export function Answer(props) {
  return <div> {props.answer} </div>;
}
// is this okay

let questnum = 0;

function App() {
  return (
    <div className="app">
      Trivia!
      <Question question={data[questnum].question.text} answer="my answer" />
      <Question question="question two goes here" answer="my other answer" />
      <NextQuestion />
    </div>
  );
}

export default App;

// These are equivalent:
// <button></button>
// <button />
