import React, {useContext} from 'react';
import fullStar from '../assets/star.png';
import halfStar from '../assets/half-star.png';
import emptyStar from '../assets/favourite.png';
import life from '../assets/health.png';
import reset from '../assets/reset.png';
import {BoardContext} from '../context/boardContext.js';

const Instructions = () => {
    const {level, setLevel} = useContext(BoardContext);

    const increaseLevel = (e) => {
        e.preventDefault();
        if(level < 2){
            setLevel(level + 1)
        }
    }
    
    const decreaseLevel = (e) => {
        e.preventDefault();
        if (level > 0) {
            setLevel(level - 1)
        }
    }


    return (
        <div className='instruction-container'>
            <h1 className='game-title'>MasterMind</h1>

            <div className="intructions">
                <h1 className='rules'>Game Rules:</h1>
                <h2>Instructions</h2>
                <p> - player is given 10 attempts to guess the four chosen numbers ranging from 0-7</p>
                <h1>Legend</h1>
                <ul>
                    <li>
                        <img src={fullStar} />
                        <p>same number and position</p>
                    </li>
                    <li>
                        <img src={halfStar} />
                        <p> number exists but wrong position</p>
                    </li>
                    <li>
                        <img src={emptyStar} />
                        <p> wrong number and wrong position</p>
                    </li>
                    <li>
                        <img src={life} />
                        <p> attempts left</p>
                    </li>
                    <li>
                        <img src={reset} />
                        <p> restat game</p>
                    </li>
                </ul>
            </div>
            <section className="level">
                <button onClick={(e) => decreaseLevel(e)}> - </button>
                <h1>{level}</h1>
                <button onClick={(e) => increaseLevel(e)}>+</button>

                </section>
    
        </div>
    )
}

export default Instructions;