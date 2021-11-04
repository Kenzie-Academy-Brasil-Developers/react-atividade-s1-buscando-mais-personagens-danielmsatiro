import "./App.css";
import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results)
        setNext(response.info.next)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(next)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList([...characterList,...response.results])
        setNext(response.info.next)
      })
      .catch((err) => console.log(err));
  }, [next]);

  console.log(next)

  return (
    <div className="App">
      <header className="App-header">
        {<Characters characterList={characterList} />}
      </header>
    </div>
  );
}

export default App;
