import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemons = () => {
  const [data, setData] = useState({});

  const { name } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
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
  }, [name]);

  return (
    <div>
      {data.error ? (
        <p>Error: {data.errorMessage}</p>
      ) : (
        <div>
          <h1>{data.name}</h1>
          <img src={data.sprites?.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </div>
  );
};

export default Pokemons;

