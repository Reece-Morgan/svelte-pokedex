<nav>
    <img class="header-logo" src="/poke-logo.svg" alt="Pokemon Logo" />
    <h1 class="subtitle">Pokedex</h1>
</nav>

<slot></slot>

<footer>
    <a href="https://www.reecemorgan.co.uk" target="_blank" rel="noreferrer">Reece Morgan 2023</a>
</footer>

<style>
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100px;
        color: #ffcb05;
        background: #003a70;
        border-bottom: 2px solid #ffcb05;
    }

    nav .header-logo {
        height: 70px;
    }

    nav .subtitle {
        font-size: 1.25em;
        font-weight: 800;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        margin: 0;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        background: #003a70;
        border-top: 2px solid #ffcb05;
    }

    footer a {
        font-size: 1em;
        color: #ffcb05;
        text-decoration: none;
        font-family: 'Aldrich', 'Verdana', sans-serif;
    }

    footer a:hover {
        color: #ffcb05;
        text-decoration: underline
    }
</style>

<script lang="ts">
    import '../styles/fonts.css';
</script>
