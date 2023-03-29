import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="App">
            <header className="header">
                <Header score bestScore />
            </header>
            <main className="main">
                <Main />
            </main>
        </div>
    );
}

export default App;
