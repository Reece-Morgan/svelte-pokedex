<nav>
    <h1>Pokedex Web App</h1>
</nav>

<slot></slot>

<footer>
    <a href="https://www.reecemorgan.co.uk" target="_blank" rel="noreferrer">Reece Morgan 2023</a>
</footer>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        color: #ffcb05;
        background: #003a70;
        border-bottom: 2px solid #ffcb05;
    }

    h1 {
        font-size: 2em;
        font-weight: 800;
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
        text-decoration: none
    }

    footer a:hover {
        color: #ffcb05;
        text-decoration: underline
    }
</style>