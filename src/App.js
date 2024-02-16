import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import HeroContent from "./components/HeroContent";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <main className="main-content">
                    <HeroContent />
                </main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
