import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

// useContext allows you to consume context
// createContext creates a context object
// This is very useful for sharing data that can be considered “global” for a tree of React components,
// such as the current authenticated user, theme, or preferred language.

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
}

const usePokemon = () => useContext(PokemonContext);

const usePokemonSource = (): {
  pokemon: Pokemon[];
} => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name.english}</div>
      ))}
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <PokemonContext.Provider value={usePokemonSource()}>
          <PokemonList />
        </PokemonContext.Provider>
      </div>
    </>
  );
}

export default App;
