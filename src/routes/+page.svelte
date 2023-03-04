<script>
    import { formatText, getRegionIcon } from './+server';
    import '../styles/fonts.css';

    /** @type {import('./$types').PageData} */  
    export let data;
</script>

<h2 class="title">Browse through the Pokedex by generation!</h2>

<div class="gen-grid">
    {#each data.results as result}
        <div class="gen-tile">
            <a href='/{result.name}'>
                <img src={getRegionIcon(result.name)} alt={result.name} />
                <p>{formatText(result.name)}</p>
            </a>
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
        max-width: 1000px;
        margin: 0 auto;
    }

    .gen-tile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        min-width: 300px;
    }

    .gen-grid .gen-tile a {
        color: #ffcb05;
        text-align: center;
        text-decoration: none;
    }

    .gen-grid .gen-tile a:hover {
        color: #ffcb05;
        text-decoration: underline;
    }

    .gen-grid .gen-tile a img {
        height: 300px;
    }

    .gen-grid .gen-tile a p {
        color: #ffcb05;
        font-size: 1em;
        font-weight: 500;
        font-family: 'Aldrich', 'Verdana', sans-serif;
    }
</style>
