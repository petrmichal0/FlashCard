import { useState } from "react";
import { questions, Question } from "./data";
import { motion } from "framer-motion";

const animationAllCards = (index: number) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: index * 0.1 },
});

const animationCard = (isSelected: boolean) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, scale: isSelected ? 1.5 : 1 },
  transition: { duration: 0.3 },
});

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number): void => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flashcards">
      {questions.map(({ id, question, answer }: Question, index) => {
        const isSelected = id === selectedId;
        const content = isSelected ? answer : question;

        return (
          <motion.div
            key={id}
            onClick={() => handleClick(id)}
            className={`flashcards__item ${isSelected ? "selected" : ""}`}
            {...animationAllCards(index)}
          >
            <motion.div {...animationCard(isSelected)}>{content}</motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default App;
