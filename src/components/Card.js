import React from "react";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card" onClick={props.handleCardClick}>
            <div className="cardContent">
                <img
                    src={props.pokemon.image}
                    alt={props.pokemon.name}
                    className="cardImage"
                />
                <p className="cardName">{props.pokemon.name}</p>
            </div>
        </div>
    );
}

export default Card;
