const PokemonCart = ({ pokemon: { sprites, name, stats } }) => {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <p>{name}</p>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCart;
