import React, { useState, useEffect } from 'react';

const Questionaire = (props) => {

  function handleAnswer() {
    const newAnswer = {
      timeMessage: timeMessage,
      spaceMessage: spaceMessage,
    }
    fetch('/checksubmission', {
        method: "POST",
        body: newAnswer,
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((res) => 
    // check if answer is correct,
      // if so, 
        // change answer variable to true
        // fetch a new question
      // else, 
        // change answer variable to incorrect
        // send the count and username to leaderboard table (backend)
        // reset the count
        // prompt a window to try again?
          // reload the page
    console.log(res));
  }

  const [question, getQuestion] = useState({
    questionName: '',
    question: '',
    answer: '',
    difficulty: '',
    timeComplexity: '',
    spaceComplexity: ''
  });

  const [leaders, getLeaders] = useState([]);

  const [count, setCount] = useState(0);

  const [answer, setAnswer] = ["?"]

{/* <button onClick={() => setCount(count + 1)}></button> */}
  return (
    <div>
      <div className="Num-diff-display">
        <p>Question#: </p>
        <p>Difficulty: </p>
      </div>
      <p className="question"></p>
      <p className="questionAnswer"></p>
      <p className="instructions">
        this is how you answer the question: ...
      </p>
      <input
      className="timeInput"
      placeholder="what is your time answer?"
      // onChange={(e) => (timeMessage = e.target.value)}
      // value={submission}
      >
      </input>
      <input
      className="spaceInput"
      placeholder="what is your space answer?"
      onChange={(e) => (spaceMessage = e.target.value)}
      // value={submission}
      >
      </input>
      <div className="answerbox">Your Answer is... </div>
      <button onClick={() => console.log('hi')}>SUBMIT</button>
    </div>
  )
};

export default Questionaire;