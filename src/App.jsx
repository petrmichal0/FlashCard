import { useState } from "react";
import { questions } from "./data";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId((prevId) => (prevId === id ? "" : id));
  };

  return (
    <div className="flashcards">
      {questions.map(({ id, question, answer }) => {
        const isSelected = id === selectedId;
        const content = isSelected ? answer : question;

        return (
          <div
            key={id}
            onClick={() => handleClick(id)}
            className={`flashcards__item ${isSelected ? "selected" : ""}`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default App;
