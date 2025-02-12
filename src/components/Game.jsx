import React, { useState, useEffect, useRef } from "react";

const words = [
  "football",
  "gaming",
  "fishing",
  "gym",
  "stock market",
  "investing",
  "software developer",
  ".net",
  "nackademin",
  "graduation",
  "bachelor",
  "business administration",
  "mittuniversitetet",
  "sundsvall",
  "c#",
  "asp.net",
  "database",
  "efcore",
  "ado.net",
  "t-sql",
  "mongodb",
  "frontend",
  "javascript",
  "typescript",
  "react",
  "angular",
  "html",
  "css",
  "object-oriented",
  "analysis",
  "design",
  "data communication",
  "security",
  "devops",
  "movie booking",
  "json server",
  "operations",
  "process manager",
  "investor relations",
  "leadership",
  "regulatory compliance",
  "nasdaq stockholm",
  "first north",
  "project management",
  "ir websites",
  "corporate websites",
  "dennis",
  "bircan",
  "active",
  "passionate",
  "developer",
  "coding",
  "programming",
  "experience",
  "management",
  "teamwork",
  "communication",
  "problem solving",
  "innovation",
  "creativity",
  "learning",
  "development",
  "growth",
];

function Game() {
  const [currentWord, setCurrentWord] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [apm, setAPM] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const timerRef = useRef(null);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    let newindex;
    do {
      newindex = Math.floor(Math.random() * words.length);
    } while (newindex === randomIndex);
    return words[newindex];
  };

  const startGame = () => {
    setCurrentWord(getRandomWord());
    setInput("");
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setGameStarted(true);
    setAPM(0);
    setTotalCharacters(0);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerRef.current);
          setIsPlaying(false);
          return 0;
        }
      });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    if (userInput === currentWord) {
      setScore((prevScore) => prevScore + 1);
      setTotalCharacters((prevChars) => prevChars + currentWord.length);
      setCurrentWord(getRandomWord());
      setInput("");
    }
  };

  useEffect(() => {
    if (!isPlaying && timeLeft === 0) {
      const timeElapsedInMinutes = 30 / 60;
      const calculatedAPM = totalCharacters / timeElapsedInMinutes;
      setAPM(Math.round(calculatedAPM));
    }
  }, [isPlaying, timeLeft, totalCharacters]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section id="typecraft" className="container my-5">
      <div className="row">
        <article className="col-md-8 col-12 mx-auto">
          <h2 className="mb-4">TypeCraft</h2>
          <div>
            <p className="lead fw-bold">Time Left: {timeLeft} seconds</p>
            <p className="lead fw-bold">Score: {score}</p>
            <p className="lead fw-bold">Actions Per Minute (APM): {apm}</p>
            {isPlaying ? (
              <>
                <p className="lead fw-bold">Type this word:</p>
                <p className="fs-1 fw-bold mb-4">{currentWord}</p>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className="form-control form-control-lg w-50 mx-auto text-center"
                  autoFocus
                />
              </>
            ) : (
              <p className="lead fw-bold">Your final score is {score}.</p>
            )}
          </div>
          <button className="btn btn-primary btn-lg mt-4" onClick={startGame}>
            {gameStarted ? "Try Again" : "Start Game"}
          </button>
          <div className="text-muted mt-3">
            <small>
              Words in this game are inspired by the content found on Dennis
              Bircan's website.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Game;
