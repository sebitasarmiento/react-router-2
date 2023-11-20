import React, { useEffect, useState } from 'react';

const Pokemons = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
        const response = await fetch(url, { signal });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setData({ error: true, errorMessage: error.message });
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []); // La dependencia está vacía ya que solo se carga una vez al montar el componente

  return (
    <div>
      {data.error ? (
        <p>Error: {data.errorMessage}</p>
      ) : (
        <div>
          <h1>Lista de Pokémones</h1>
          <ul>
            {data.results &&
              data.results.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemons;