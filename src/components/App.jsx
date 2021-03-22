import React, { Component, useState } from "react";
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
  return <button onClick={props.onClick}>Next Question</button>;
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
  const correctAnswer = data[questnum].question.choices[
    data[questnum].question.correct_choice_index
  ];  
  
  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questnum].question.text}
        answer={data[questnum].question.choices}
      />
      {/* <Question question="question two goes here" answer=["my other answer"] /> */}
      <NextQuestion onClick={() => setQuestNum(questnum + 1)} />
      <CorrectAnswer onClick={() => setIsAnswered(!isAnswered)} />
      {isAnswered === true ? <p>The correct answer is {correctAnswer}</p> : <p></p>}
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
