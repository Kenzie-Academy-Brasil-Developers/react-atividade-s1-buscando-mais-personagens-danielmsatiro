import "./App.css";
import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const previusPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };
  const nextPage = () => {
    setNext(next + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={previusPage}>Previus Page</button>
        <button onClick={nextPage}>Next Page</button>
        {<Characters characterList={characterList} />}
      </header>
    </div>
  );
}

export default App;
