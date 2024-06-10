"use client";

import Image from "next/image";
import { useState } from "react";

// easy implements

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect: boolean) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <section className="p-6 bg-secondary flex items-center justify-center rounded-xl flex-col gap-4 text-gray-100">
        <h1 className="text-6xl font-bold text-primary">Quizz App</h1>
        <h2 className="text-2xl ">
          Score :{" "}
          <span className="font-bold text-4xl text-primary">{score}</span>
        </h2>

        {showResults ? (
          /* 4. Final Result */
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold tracking-wider">Final Results</h1>
            <h2 className="text-2xl">
              <span className="text-green-600">{score} </span>
              out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()} className="text-red-400">
              Restart game
            </button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="flex items-start justify-center flex-col gap-3">
            {/* Current Question  */}
            <h2 className="text-xl font-semibold">
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="text-2xl font-semibold tracking-wide">
              {questions[currentQuestion].text}
            </h3>

            {/* List of possible answers  */}
            <ul className="flex text-lg flex-col gap-2">
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    className="cursor-pointer hover:text-green-600 transition-all duration-100 ease-in"
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
