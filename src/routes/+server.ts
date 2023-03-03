export function getGenerations() {
    return fetch('https://pokeapi.co/api/v2/generation')
        .then(response => response.json());
}

export function getRegionIcon(generation: string) {
    switch (generation) {
        case 'generation-i':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
        case 'generation-ii':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png'
        case 'generation-iii':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png'
        case 'generation-iv':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png'
        case 'generation-v':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png'
        case 'generation-vi':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png'
        case 'generation-vii':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png'
        case 'generation-viii':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png'
        case 'generation-ix':
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png'
        default:
            return 'https://img.pokemondb.net/sprites/gold/normal/pikachu.png'
    }
}

export function formatText(str: string) {
    const retAllCapitalized = str.toUpperCase().split('-').join(' ');
    return retAllCapitalized;
}

// TODO: add functions to shared file
// export function kebabToAllCapitalized(str: string) {
//     const retAllCapitalized = str.toUpperCase().split('-').join(' ');
//     return retAllCapitalized;
// }

// export function kebabToCapitalized(str: string) {
//     const withSpaces = str.split('-').join(' ');
//     const retCapitalized = withSpaces.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
//         letter.toUpperCase()
//     );
//     return retCapitalized;
// }