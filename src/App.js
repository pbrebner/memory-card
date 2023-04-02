import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    let [score, setScore] = useState(0);
    let [bestScore, setBestScore] = useState(0);

    function incrementScore() {
        let currentScore = score;
        if (currentScore + 1 > bestScore) {
            setBestScore(currentScore + 1);
        }
        setScore(currentScore + 1);
    }

    function resetScore() {
        setScore(0);
    }

    return (
        <div className="App">
            <header className="header">
                <Header score={score} bestScore={bestScore} />
            </header>
            <main className="main">
                <Main incrementScore={incrementScore} resetScore={resetScore} />
            </main>
            <footer className="footer">
                <p>Developed by Patrick Brebner</p>
            </footer>
        </div>
    );
}

export default App;
