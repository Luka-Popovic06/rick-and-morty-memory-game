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
}

export default App;
