const fetchPokemon = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Все пропало пакемона ${name} не існує`));
  });
};

const api = {
  fetchPokemon,
};

export default api;
