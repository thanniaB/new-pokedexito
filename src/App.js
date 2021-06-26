import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox'
import Pokemon from './components/Pokemon'
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  padding-top: 150px;
`

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonSprite, setPokemonSprite] = useState('');
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    console.log(pokemon);
    setPokemonName(pokemon.name || '');
    setPokemonSprite(pokemon.sprites ? pokemon.sprites.front_default : '');
    setPokemonStats(pokemon.stats ? pokemon.stats : [])
  }, [pokemon])

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }
  }

  return (
    <MainApp>
      <SearchBox handleKeyPress={handleKeyPress}/>
      <Pokemon name={pokemonName} sprite={pokemonSprite} stats={pokemonStats}/>
    </MainApp>
  );
}

export default App;
