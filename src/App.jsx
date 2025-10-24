import { useState, useEffect } from "react";
import { rickAndMortyCaracters } from "./caracters.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <h1 className="title">Rick and Morty memory game</h1>
      </header>
      <main className="container"></main>
    </>
  );
}

export default App;
