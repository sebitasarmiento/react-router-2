import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const getPokemon = () => {
    if (!name) return;

    const path = `/pokemons/${name}`;
    navigate(path);
  };

  return (
    <div>
      <h3>Buscar personajes</h3>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Ingrese el nombre del Pokémon"
      />
      <button onClick={getPokemon}>Buscar</button>
    </div>
  );
};

export default Home