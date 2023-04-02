import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import CardGrid from "./CardGrid";

function Main(props) {
    const numPokemon = 12;
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
            setPokemons(shuffle(await fetchPokemons(numPokemon)));
        }

        loadCards();
    }, []);

    async function fetchPokemons(amountPokemon) {
        const pokemons = [];

        for (let i = 1; i <= amountPokemon; i++) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
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
        console.log(e.target.parentNode.lastChild.textContent);
        const pokemonName = e.target.parentNode.lastChild.textContent;
        checkSelection(pokemonName);
        setPokemons(shuffle(pokemons));
    }

    function checkSelection(pokemonName) {
        if (clickedPokemons.includes(pokemonName)) {
            resetGame();
        } else {
            props.incrementScore();
            setClickedPokemons((prevState) => [...prevState, pokemonName]);
        }
    }

    function resetGame() {
        setClickedPokemons([]);
        props.resetScore();
    }

    return (
        <div className="mainInnerWrapper">
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
