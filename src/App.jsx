import { useState, useEffect } from "react";
import { rickAndMortyCaracters } from "./caracters.js";
import Caracter from "./Caracter.jsx";
import "./App.css";

function App() {
  const [caracters, setCaracters] = useState(rickAndMortyCaracters);

  return <></>;
}

export default App;
