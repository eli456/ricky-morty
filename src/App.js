import imagenRM from "./img/Rick & Morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty </h1>
        <div class="actions">
                    <div class="btn hvr-underline-from-center name">
                      Elizabeth Galindol{" "}
                    </div>
                    <div class="btn hvr-underline-from-center info">
                      Ingeniería de Software, 602
                    </div>
                  </div>
        
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imagenRM} alt="Rick & Morty" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;