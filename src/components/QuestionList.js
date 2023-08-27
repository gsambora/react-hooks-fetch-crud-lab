import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, onDeleteQuestion, onUpdateQuestion}) {
  
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((response)=>response.json())
    .then((questions)=>setQuestions(questions))
  }, [])
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{
        //console.log(question)
        return(<QuestionItem 
          key={question.id} 
          question={question}
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQuestion={onUpdateQuestion}/>)
        })}</ul>
    </section>
  );
}

export default QuestionList;
