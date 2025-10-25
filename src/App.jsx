import { useState, useEffect } from "react";
import { rickAndMortyCharacters } from "./caracters.js";
import Caracter from "./Caracter.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(rickAndMortyCharacters);
  const [selectedCard, setSelectedCard] = useState({});
  const [score, setScore] = useState({ current: 0, high: 0 });

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[random]] = [newArray[random], newArray[i]];
    }
    return newArray;
  };
  const markCharacterAsClicked = (id) => {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === id ? { ...character, isClicked: true } : character
      )
    );
  };
  const selectCharacter = (id) => {
    const selectedObject = characters.find((character) => character.id === id);
    setSelectedCard(selectedObject);
  };
  const reset = () => {
    setScore((prev) => ({
      current: 0,
      high: prev.high <= prev.current ? prev.current : prev.high,
    }));
    setSelectedCard({});
    characters.map((character) => {
      character.isClicked = false;
    });
  };
  useEffect(() => {
    const newShuffled = shuffle(characters);
    setCharacters(newShuffled);
  }, [score.current]);
  return (
    <>
      <header className="header">
        <h1 className="title">Rick and Morty memory game</h1>
      </header>
      <main className="container">
        <div className="score-box">
          <div className="current-score-box">
            <p className="current-score-p">Current score:</p>
            <p className="current-score">{score.current}</p>
          </div>
          <div className="high-score-box">
            <p className="high-score-p">High score:</p>
            <p className="high-score">{score.high}</p>
          </div>
        </div>
        <ul className="list">
          {characters.map((character) => {
            return (
              <Caracter
                key={character.id}
                {...character}
                clicked={markCharacterAsClicked}
                selectCard={selectCharacter}
                setScore={() => {
                  setScore((prev) => ({
                    current: prev.current + 1,
                    high: prev.high <= prev.current ? prev.high + 1 : prev.high,
                  }));
                }}
              />
            );
          })}
        </ul>
      </main>
      {(selectedCard.isClicked === true || score.current === 12) && (
        <>
          <div className="overlay"></div>
          <div className="game-over-box">
            <p className="game-over-p">Game over!</p>
            <p className="score-p">
              Your score: <span className="score">{score.current}</span>
            </p>
            <button
              type="button"
              className="play-again-btn"
              onClick={() => {
                reset();
              }}
            >
              Play again?
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
