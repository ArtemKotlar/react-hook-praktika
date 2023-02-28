import { Component } from 'react';
import PokemonCart from './PokemonCart';
import PokemonError from './PokemonError';
import PokemonPending from './PokemonPending';
import pokemonAPI from '../../services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Вкажіть імя пакемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPending />;
    }

    if (status === 'rejected') {
      return <PokemonError message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonCart pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;
