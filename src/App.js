import { useState } from "react";
import questions from "./data";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <div className="flashcards">
        {questions.map((question) => {
          return (
            <div
              key={question.id}
              onClick={() => handleClick(question.id)}
              className={question.id === selectedId ? "selected" : ""}
            >
              <p>
                {question.id === selectedId
                  ? question.answer
                  : question.question}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
