import { useState, useEffect } from "react";
import { rickAndMortyCharacters } from "./caracters.js";
import Caracter from "./Caracter.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(rickAndMortyCharacters);
  const [selectedCard, setSelectedCard] = useState({});
  const [score, setScore] = useState({ current: 0, high: 0 });
}

export default App;
