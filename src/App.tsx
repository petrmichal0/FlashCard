import { useState } from "react";
import { questions, Question } from "./data";

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number): void => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flashcards">
      {questions.map(({ id, question, answer }: Question) => {
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
