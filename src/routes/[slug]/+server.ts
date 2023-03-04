export function getPokemon(limit: number, offset: number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json());
}

export const getLimitAndOffset = (generation: string) => {
    switch (generation) {
        case 'generation-i':
            return {
                limit: 151,
                offset: 0
            }
        case 'generation-ii':
            return {
                limit: 100,
                offset: 151
            }
        case 'generation-iii':
            return {
                limit: 135,
                offset: 251
            }
        case 'generation-iv':
            return {
                limit: 107,
                offset: 386
            }
        case 'generation-v':
            return {
                limit: 156,
                offset: 493
            }
        case 'generation-vi':
            return {
                limit: 72,
                offset: 649
            }
        case 'generation-vii':
            return {
                limit: 88,
                offset: 721
            }
        case 'generation-viii':
            return {
                limit: 96,
                offset: 809
            }
        case 'generation-ix':
            return {
                limit: 103,
                offset: 905
            }
        default:
            return {
                limit: 151,
                offset: 0
            }
    }
}

export const getPokemonNumber = (url: string) => {
    const str = url.slice(33);
    const number = str.split('/').join('');
    return number;
}
