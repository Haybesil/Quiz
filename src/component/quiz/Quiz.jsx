import React, { useState } from 'react';
import '../../App.css'

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Earth', 'Saturn'],
    correctAnswer: 'Jupiter'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'Stephen King', 'Mark Twain'],
    correctAnswer: 'Harper Lee'
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["Wt", "Wo", "H2O", "Wa"],
    correctAnswer: "H2O"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Giraffe"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi Apparatus"],
    correctAnswer: "Mitochondria"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Heart", "Skin", "Brain"],
    correctAnswer: "Skin"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "George Orwell", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    correctAnswer: "Japan"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correctAnswer: "Au"
  },
  {
    question: "Who was the first man to walk on the moon?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    correctAnswer: "Neil Armstrong"
  },
  {
    question: "In what year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: "1945"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "Who painted the famous artwork 'Starry Night'?",
    options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correctAnswer: "Au"
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1912", "1907", "1921", "1915"],
    correctAnswer: "1912"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "India", "South Korea"],
    correctAnswer: "Japan"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion  < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption('');
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <div className='body'>
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <div>
                    {option}
                  </div>
                  
                </label>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handleNextQuestion}>Next</button>
             <button onClick={handlePreviousQuestion}>Previous</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
