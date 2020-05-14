import React from 'react';
import Decks from './Decks';
const Instruction = () => {
    return (
        <div className="container">
            <h2 style={{ marginLeft: "15px" }}>How do I <span className="highlighted-text">Proceed?</span></h2>
            <Decks />
        </div>
    )
};

export default Instruction;