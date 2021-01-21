import React, { Component, useState } from "react";
import { isPropertySignature } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

export function Question(props) {
  return <div> {props.question}!</div>;
}
// is this okay
let questnum = 0;

function App() {
  return (
    <div className="app">
      Trivia!
      <Question question={data[questnum].question.text} />
      <Question question="question two goes here" />
    </div>
  );
}

export default App;
