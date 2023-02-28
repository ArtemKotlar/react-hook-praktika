import { ImSpinner } from 'react-icons/im';

const PokemonPending = ({ pokemonName }) => {
  return (
    <div role={alert}>
      <div s>
        <ImSpinner size="32" />
        Загрузка...
      </div>
    </div>
  );
};

export default PokemonPending;
