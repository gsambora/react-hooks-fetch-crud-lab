import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

function handleDeleteQuestion(deletedQuestion){
  const updatedQuestions=questions.filter((ques)=> ques.id !== deletedQuestion.id);
  setQuestions(updatedQuestions)
}

function handleUpdateQuestion(updatedQuestion){
  const updatedList = questions.map((question)=>{
    if (question.id === updatedQuestion.id) {
      return updatedQuestion
    } else {
      return question
    }
  })
  setQuestions(updatedList);
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddQuestion={handleNewQuestion}/> : 
      <QuestionList onDeleteQuestion= {handleDeleteQuestion}
                    onUpdateQuestion={handleUpdateQuestion} 
                    questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
