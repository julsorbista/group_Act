import { useState } from "react";

function GradeEvaluation() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [remarks, setRemarks] = useState("");
  const [showResult, setShowResult] = useState(false);

  function evaluateGrade() {
    if (name === "" || score === "") {
      setRemarks("Please complete all fields.");
      setShowResult(false);
    } 
    else if (score < 0 || score > 100) {
      setRemarks("Invalid score");
      setShowResult(true);
    } 
    else if (score >= 90) {
      setRemarks("Excellent");
      setShowResult(true);
    } 
    else if (score >= 85) {
      setRemarks("Very Good");
      setShowResult(true);
    } 
    else if (score >= 80) {
      setRemarks("Good");
      setShowResult(true);
    } 
    else if (score >= 75) {
      setRemarks("Passed");
      setShowResult(true);
    } 
    else {
      setRemarks("Failed");
      setShowResult(true);
    }
  }

  function clearForm() {
    setName("");
    setScore("");
    setRemarks("");
    setShowResult(false);
  }

  return (
    <div className="card">

      <h1>Student Grade Evaluation</h1>
      <label>Student Name</label>

      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <label>Score</label>
      <input type="number" value={score} onChange={(event) => setScore(event.target.value)} />
      <button onClick={evaluateGrade}>
        Evaluate
      </button>
      <button onClick={clearForm}>
        Clear
      </button>

      {remarks !== "" && (
        <div className="result">
          {showResult ? (
            <>
              <h2>Result</h2>
              <p> Student Name: {name} </p>
              <p> Score: {score} </p>
              <p>Remarks: {remarks} </p>
            </>
          ) : (
            <p>{remarks}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default GradeEvaluation;