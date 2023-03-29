import React from "react";
import "../styles/Header.css";

function Header(props) {
    return (
        <div className="headerInnerWrapper">
            <h1 className="gameName">Memory Match</h1>
            <div className="scores">
                <p className="score">Score: {props.score}</p>
                <div className="vl"></div>
                <p className="bestScore">Best Score: {props.bestScore}</p>
            </div>
        </div>
    );
}

export default Header;
