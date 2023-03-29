import React from "react";

function Header(props) {
    return (
        <div className="headerInnerWrapper">
            <h1 className="gameName">Memory Match</h1>
            <div className="scores">
                <p className="score">{props.score}</p>
                <div className="vl"></div>
                <p className="bestScore">{props.bestScore}</p>
            </div>
        </div>
    );
}

export default Header;
