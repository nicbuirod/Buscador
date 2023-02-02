import { useState } from "react";
import "./App.css";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [text, setText] = useState("");

  const Search = () => {
    setTextSearch(text);
  };

  return (
    
    <div className="container">
      <header>Bienvenido</header>
      <div className="search">
        <h2>Buscar:</h2>
        <input
          className="inputText"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            Search();
          }}
        >
          Send
        </button>
      </div>
      <p className="result">{textSearch}</p>
    </div>
  );
}

export default App;
