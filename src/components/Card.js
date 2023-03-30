import React, { useEffect, useState } from "react";
import "../styles/Card.css";

function Card(props) {
    let [chosen, setChosen] = useState(false);
    let output;

    if (chosen) {
        output = <p>This was Chosen</p>;
    } else {
        output = <p>Not Chosen</p>;
    }

    useEffect(() => {
        props.sortCards();
    }, [chosen]);

    return (
        <div
            className="card"
            onClick={() => {
                setChosen((chosen = true));
            }}
        >
            <div className="cardContent">
                <p>{props.value}</p>
                {output}
            </div>
        </div>
    );
}

export default Card;
