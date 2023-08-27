import React, {useState} from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onDeleteClick(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE"
    })
    .then((response)=>response.json())
    .then(()=>onDeleteQuestion(question))
  }

  function onSelectChange(event){
    //console.log(event.target.value)

    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"correctIndex": event.target.value})
    })
    .then((response)=>response.json())
    .then((updatedQuestion)=>onUpdateQuestion(updatedQuestion))
  }

  const options = answers && answers.map((answer, index) => (
    //value={index}
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onSelectChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
