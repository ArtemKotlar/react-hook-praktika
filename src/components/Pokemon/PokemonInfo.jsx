import { useState, useEffect } from 'react';
import PokemonCart from './PokemonCart';
import PokemonError from './PokemonError';
import PokemonPending from './PokemonPending';
import pokemonAPI from '../../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    // Робимо if (!pokemonName) {return;}  коли перший рендер це пуста строка
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        // Порядок важливий!!! Спочатку дані а потім статус
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Вкажіть імя пакемона.</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPending pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonError message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonCart pokemon={pokemon} />;
  }
}
