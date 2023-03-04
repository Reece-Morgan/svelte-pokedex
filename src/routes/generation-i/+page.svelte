<script>
    /** @type {import('./$types').PageData} */  
    export let data;
</script>

<!-- TODO: investigate turning hardcoded page into dynamic page for every gen -->
<div class="title-wrapper">
    <h2 class="title">Generation I</h2>
    <a class="back-link" href='/'>Back</a>
</div>

<div class="gen-grid">
    {#each data.results as pokemon, i}
        <div class="gen-tile">
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{i+1}.png' alt={pokemon.name} />
            <p>No. {i+1}: {pokemon.name}</p>
        </div>
    {/each}
</div>

<style>
    .title-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title-wrapper .title {
        color: #ffcb05;
        font-size: 2em;
        font-weight: 800;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        text-align: center;
        margin-bottom: 10px;
    }

    .title-wrapper .back-link {
        color: #ffcb05;
        text-decoration: none;
        font-size: 1em;
        font-weight: 500;
        font-family: 'Aldrich', 'Verdana', sans-serif;
    }

    .back-link:hover {
        color: #ffcb05;
        text-decoration: underline;
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