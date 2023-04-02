import React, { useEffect, useState } from "react";
import "../styles/Card.css";

function Card(props) {
    return (
        <div className="card" onClick={props.handleClick}>
            <div className="cardContent">
                <img src={props.pokemon.image} alt={props.pokemon.name} />
                <p>{props.pokemon.name}</p>
            </div>
        </div>
    );
}

export default Card;
