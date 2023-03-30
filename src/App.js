import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    let [score, setScore] = useState(0);
    let [bestScore, setBestScore] = useState(0);

    return (
        <div className="App">
            <header className="header">
                <Header score={score} bestScore={bestScore} />
            </header>
            <main className="main">
                <Main setScore={setScore} setBestScore={setBestScore} />
            </main>
        </div>
    );
}

export default App;
