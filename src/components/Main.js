import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import "../styles/Main.css";
import Card from "./Card";

function Main(props) {
    let [gameOver, setGameOver] = useState(false);
    let [cardList, setCardList] = useState([]);

    const cardInfoList = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    //Need to generate a deck of cards when the component Mounts
    useEffect(() => {
        let componentCardList = cardInfoList.map((cardInfo) => (
            <Card
                key={cardInfo.id}
                value={cardInfo.value}
                sortCards={useSortCards}
            />
        ));
        setCardList((cardList = componentCardList));
    }, []);

    function useSortCards() {
        console.log("Running");
        let sortedList = shuffle(cardList);
        setCardList(sortedList);
        console.log(cardList);
    }

    //After clicking a card, I need to check if the card was already chosen

    //If not already chosen, randomly sort to card list, update score and display set

    //If already chosen, end game, reset with new deck, and update Bestscore if necessary

    return (
        <div className="mainInnerWrapper">
            <div className="gameCards">{cardList}</div>
        </div>
    );
}

export default Main;
