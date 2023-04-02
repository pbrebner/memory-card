import React from "react";
import "../styles/Header.css";
import pokeball from "../assets/pokeball.png";

function Header(props) {
    return (
        <div className="headerInnerWrapper">
            <div className="nameContainer">
                <img src={pokeball} alt="Pokeball" className="pokeballLogo" />
                <h1 className="gameName">PokeMemory</h1>
            </div>
            <div className="scores">
                <p className="score">Score: {props.score}</p>
                <div className="vl"></div>
                <p className="bestScore">Best Score: {props.bestScore}</p>
            </div>
        </div>
    );
}

export default Header;
