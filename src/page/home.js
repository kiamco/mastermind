import React from 'react';
import Board from '../components/board.js';
import Instructions from '../components/instructions.js'
const Homepage = () => {
    return(
        <div className="homepage">
            <Instructions/>
            <Board />
        </div>
    )
}

export default Homepage;