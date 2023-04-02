import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import CardGrid from "./CardGrid";

function Main(props) {
    const [level, setLevel] = useState(1);
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);

    //Utility functions: shuffle and capitalizeFirstLetter
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    function capitalizeFirstLetter(string) {
        return string.slice(0, 1).toUpperCase() + string.slice(1);
    }

    //When component mounts, fetch data from API and set pokemons state
    useEffect(() => {
        async function loadCards() {
            let numPokemon = level * 4;
            setPokemons(shuffle(await fetchPokemons(numPokemon)));
        }

        loadCards();
    }, []);

    //When level changes, fetch data from API and set pokemons state
    useEffect(() => {
        async function loadCards() {
            let numPokemon = level * 4;
            setPokemons(shuffle(await fetchPokemons(numPokemon)));
        }

        loadCards();
    }, [level]);

    async function fetchPokemons(amountPokemon) {
        const pokemons = [];
        const pokemonsIndex = [];

        //Gets a set of random indices between 1 and 151 to determine which pokemon are selected
        while (pokemonsIndex.length < amountPokemon) {
            let randomIndex = Math.floor(Math.random() * 150) + 1;
            if (pokemonsIndex.includes(randomIndex)) {
                continue;
            } else {
                pokemonsIndex.push(randomIndex);
            }
        }

        for (const index of pokemonsIndex) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
            const response = await fetch(pokemonUrl);
            const pokemon = await response.json();
            const id = pokemon.id;
            const name = capitalizeFirstLetter(pokemon.name);
            const image = pokemon.sprites.front_default;
            pokemons.push({ id, name, image });
        }

        return pokemons;
    }

    //When card is clicked, check clicked value against clickedPokemon state
    function handleCardClick(e) {
        const pokemonName = e.target.parentNode.lastChild.textContent;
        checkSelection(pokemonName);
        setPokemons(shuffle(pokemons));
    }

    function checkSelection(pokemonName) {
        if (clickedPokemons.includes(pokemonName)) {
            resetGame();
        } else if (level === 4 && clickedPokemons.length + 1 === level * 4) {
            // Runs if you are on the final level and guess the final character correctly
            props.incrementScore();
            winGame();
        } else if (clickedPokemons.length + 1 === level * 4) {
            // Runs of the selection was correct and you have correctly guessed all for that level
            props.incrementScore();
            increaseLevel();
        } else {
            props.incrementScore();
            setClickedPokemons((prevState) => [...prevState, pokemonName]);
        }
    }

    function increaseLevel() {
        setClickedPokemons([]);
        const currentLevel = level;
        setLevel(currentLevel + 1);
    }

    function winGame() {
        const gameStatement = document.querySelector(".gameStatement");
        gameStatement.innerHTML = "Congratulations, You Won the Game!";
        setTimeout(() => {
            gameStatement.innerHTML = "Select All Characters Once";
            resetGame();
        }, 6000);
    }

    function resetGame() {
        setClickedPokemons([]);
        setLevel(1);
        props.resetScore();
    }

    return (
        <div className="mainInnerWrapper">
            <h2 className="level">Level {level}</h2>
            <h2 className="gameStatement">Select All Characters Once</h2>
            {pokemons.length ? (
                <CardGrid
                    pokemons={pokemons}
                    handleCardClick={handleCardClick}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Main;
