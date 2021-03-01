import React, { Component, useState } from "react";
import { isPropertySignature } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

//- [ ] Pass props for the answer choices into `<Question />`.
// let pieFlavor = ["blueberry", "pumpkin", "chocolate"];

// let dessert = pieFlavor.map((flavor) => {
// 	return flavor + " pie with whipped cream";
// });

export function Question(props) {
  return (
    <div>
      <div>{props.question}</div>
      {props.answer.map((answer) => {
        return <Answer answer={answer} />;
      })}
    </div>
  );
}

export function NextQuestion(props) {
  return <button>Next Question</button>;
}

export function CorrectAnswer(props) {
  return <button>Correct Answer</button>;
}

export function Answer(props) {
  return <div> {props.answer} </div>;
}
// is this okay

// declaring a regular variable
let questnum = 0;

// return <button onClick={
//   () => setIsAnswered (true)
// }>

function App() {
  // declaring a React state
  // let [ stateVariableName, setUpdateStateFunction ]
  //  = useState(initialState)
  let [isAnswered, setIsAnswered] = useState(false);

  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questnum].question.text}
        answer={["ChoiceA", "ChoiceB", "ChoiceC", "ChoiceD"]}
      />
      {/* <Question question="question two goes here" answer=["my other answer"] /> */}
      <NextQuestion />
      <CorrectAnswer />
      { if(isAnswered === True) } 
        <p>This question has been answered.</p>
      
    </div>
  );
}

export default App;

// These are equivalent:
// <button></button>
// <button />
