import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import App from "../../App";

const testQuestions = [
  { id: 1, question: "1+1?", answer: "2" },
  { id: 2, question: "2*3?", answer: "6" },
  { id: 3, question: "8*2?", answer: "16" },
];

beforeEach(() => {
  jest.mock("../../data", () => ({
    questions: testQuestions,
  }));
});

describe("App Component", () => {
  test("renders all questions", () => {
    render(<App />);

    testQuestions.forEach((question) => {
      const questionElement = screen.getByText(question.question);
      expect(questionElement).toBeInTheDocument();
    });
  });

  test("shows answer on question click", async () => {
    render(<App />);

    const firstQuestion = testQuestions[0];
    const questionElement = screen.getByText(firstQuestion.question);

    await user.click(questionElement);

    const answerElement = screen.getByText(firstQuestion.answer);
    expect(answerElement).toBeInTheDocument();
  });

  test("toggles answer on multiple clicks", async () => {
    render(<App />);

    const firstQuestion = testQuestions[0];
    const questionElement = screen.getByText(firstQuestion.question);

    await user.click(questionElement);
    expect(screen.getByText(firstQuestion.answer)).toBeInTheDocument();

    await user.click(screen.getByText(firstQuestion.answer));
    expect(screen.getByText(firstQuestion.question)).toBeInTheDocument();
  });

  test("only one answer is shown at a time", async () => {
    render(<App />);

    const firstQuestion = testQuestions[0];
    const secondQuestion = testQuestions[1];

    await user.click(screen.getByText(firstQuestion.question));
    expect(screen.getByText(firstQuestion.answer)).toBeInTheDocument();

    await user.click(screen.getByText(secondQuestion.question));
    expect(screen.getByText(secondQuestion.answer)).toBeInTheDocument();
    expect(screen.queryByText(firstQuestion.answer)).not.toBeInTheDocument();
  });
});
