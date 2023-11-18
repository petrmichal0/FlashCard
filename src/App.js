import { useState } from "react";
import { questions } from "./data";

function App() {
  const [selectedId, setSelectedId] = useState("");

  function handleClick(id) {
    setSelectedId(id === selectedId ? "" : id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={`flashcards__item ${
              question.id === selectedId ? "selected" : ""
            }`}
          >
            {question.id === selectedId ? question.answer : question.question}
          </div>
        );
      })}
    </div>
  );
}

export default App;
