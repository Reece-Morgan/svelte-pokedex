<div class="content">
    <img src="/404.png" alt="404: Page Not Found" />
    <p>Return to the <a href='/'>Home Page</a></p>
</div>

<div class="poke-images">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="Bulbasuar" />
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png" alt="Charmander" />
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="Squirtle" />
</div>

<style>
    .content {
        width: 600px;
        margin: 0 auto;
        padding: 20px 0 0 0;
    }

    .content img {
        max-width: 100%
    }

    .content p {
        font-size: 2em;
        font-family: 'Aldrich', 'Verdana', sans-serif;
        text-align: center;
    }

    .content a {
        color: #ffcb05;
        font-weight: 800;
        text-decoration: none;
    }

    .content a:hover {
        color: #ffcb05;
        text-decoration: underline;
    }
    
    .poke-images {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .poke-images img {
        width: 30%;
    }

    @media(max-width: 500px) {
        .content {
            max-width: 320px;
        }
        
        .content img {
            max-width: 320px;
        }
    }
</style>