import React from "react";
import "../styles/CardGrid.css";
import Card from "./Card";

function CardGrid(props) {
    const pokemonCards = props.pokemons.map((pokemon) => (
        <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleCardClick={props.handleCardClick}
        />
    ));

    return <div className="cardGrid">{pokemonCards}</div>;
}

export default CardGrid;
