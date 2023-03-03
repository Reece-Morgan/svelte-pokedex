<script>
    import { formatText } from '../+server';

    /** @type {import('./$types').PageData} */  
    export let data;
</script>

<h2 class="title">Generation I</h2>

<!-- TODO: investigate adding lazy loading to each -->
<div class="gen-grid">
    {#each data.results as pokemon, i}
        <div class="gen-tile">
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{i+1}.png' alt={pokemon.name} />
            <p>No. {i+1}: {pokemon.name}</p>
        </div>
    {/each}
</div>

<style>
    .title {
        color: #ffcb05;
        font-size: 2em;
        font-weight: 800;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        text-align: center;
    }

    .gen-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .gen-tile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
    }

    .gen-grid .gen-tile img {
        height: 150px;
    }

    .gen-grid .gen-tile p {
        color: #ffcb05;
        font-size: 1em;
        font-weight: 500;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        text-transform: capitalize;
    }
</style>