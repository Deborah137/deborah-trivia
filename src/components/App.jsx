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
  return <button onClick={props.onClick}> Correct Answer </button>;
}

export function Answer(props) {
  return <div> {props.answer} </div>;
}
// is this okay

// declaring a regular variable

// return <button onClick={
//   () => setIsAnswered (true)
// }>

function App() {
  // declaring a React state
  // let [ stateVariableName, setUpdateStateFunction ]
  //  = useState(initialState)
  let [questnum, setQuestNum] = useState(0);

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
      <CorrectAnswer onClick={() => setIsAnswered(!isAnswered)} />
      {isAnswered === true ? <p>This question has been answered.</p> : <p></p>}
    </div>
  );
}

//{ if(isAnswered === True){
// setIsAnswered("<p>This question has been answered.</p>")} }

// setisanswered

export default App;

// These are equivalent:
// <button></button>
// <button />
