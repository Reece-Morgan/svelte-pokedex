export function getPokemon(limit: number, offset: number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json());
}
