import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarPoke from './assets/components/NavbarPoke';
import Home from './assets/views/Home';
import Pokemons from './assets/views/Pokemons.Jsx';

function App() {
  return (
    <BrowserRouter>
      <NavbarPoke />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/:name" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
