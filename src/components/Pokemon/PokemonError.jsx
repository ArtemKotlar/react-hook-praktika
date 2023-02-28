import { GiTerror } from 'react-icons/gi';

const PokemonError = ({ message }) => {
  return (
    <div role="alert">
      <GiTerror size={50} />
      {message}
    </div>
  );
};

export default PokemonError;
