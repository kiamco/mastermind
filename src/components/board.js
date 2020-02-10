import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../context/boardContext.js';
import {findCommonEl} from '../utils/checkAnswer.js';
import {emptyStatr} from "../assets/favourite.png";
const Board = () => {

    const [rowCount, setRowCount] = useState(1);
    const [input, setInput] = useState('');
    const { rowState, rowDispatch, answer,feedDispatch,feedState } = useContext(BoardContext)

    const renderRow = (row) => {
        if (row.length > 0)
            return row.map(el => <div className="answer">{el}</div>)
    }

    const renderFeed = (feed) => {
        if(feed.length > 0)
            return feed.map(el => <img src={el} />)
        
    }

    const inputOnChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input.split('').map(el => {
            rowDispatch({ type: `row${rowCount}`, num: el })
        })
        

        if (answer) {
            const answerCopy = JSON.parse(JSON.stringify(answer))
            
            feedDispatch({ type: `feed${rowCount}`, num: findCommonEl(input.split(''), answerCopy) })
              

            
        }
        setRowCount(rowCount + 1);

    }

    useEffect(() => {

    }, [])

    return (
        <>
        <h1 className='game-title'>MaterMind</h1>
            <div className="board-container">
                <div className="input-container">
                    <div className="input">
                        {renderRow(rowState.row1)}
                    </div>
                    <div className="input">
                        {renderRow(rowState.row2)}
                    </div>
                    <div className="input">
                        {renderRow(rowState.row3)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row4)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row5)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row6)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row6)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row7)}

                    </div>
                    <div className="input">
                        {renderRow(rowState.row8)}
                    </div>
                    <div className="input">
                        {renderRow(rowState.row9)}
                    </div>
                    <div className="input">
                        {renderRow(rowState.row10)}
                    </div>
                </div>
                <div className="feedback-container">
                    <h1>Feedback</h1>
                    <div className="feedback">
                        {renderFeed(feedState.feed1)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed2)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed3)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed4)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed5)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed6)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed7)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed8)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed9)}
                    </div>
                    <div className="feedback">
                        {renderFeed(feedState.feed10)}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='e.g. 1726'
                    type="text"
                    onChange={inputOnChange}
                    pattern="[0-7]{4,4}" required title="need four digit combination use only numbers 0-7"
                />
            </form>
        </>
    )
}

export default Board;