<nav>
    <a href='/'>
        <img class="header-logo" src="/poke-logo.svg" alt="Pokemon Logo" />
        <h1 class="subtitle">Pokedex</h1>
    </a>
</nav>

<!-- TODO: add sub nav -->

<slot></slot>

<footer>
    <a class="footer-link" href="https://www.reecemorgan.co.uk" target="_blank" rel="noreferrer">Reece Morgan 2023</a>
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
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
    }

    nav a {
        color: #ffcb05;
        text-decoration: none;
    }

    nav a:hover {
        color: #ffcb05;
        text-decoration: none;
    }

    nav a .header-logo {
        height: 70px;
    }

    nav a .subtitle {
        font-size: 1.25em;
        font-weight: 800;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        margin: 0;
        text-align: center;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        background: #003a70;
        border-top: 2px solid #ffcb05;
    }

    footer .footer-link {
        font-size: 1em;
        color: #ffcb05;
        text-decoration: none;
        font-family: 'Aldrich', 'Verdana', sans-serif;
    }

    footer .footer-link:hover {
        color: #ffcb05;
        text-decoration: underline
    }
</style>

<script lang="ts">
    import '../styles/fonts.css';
</script>
