import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../context/boardContext.js';
import { findCommonEl } from '../utils/checkAnswer.js';
import reset from "../assets/reset.png";
import heart from '../assets/health.png';


const Board = () => {

    const [rowCount, setRowCount] = useState(1);
    const [win, setWin] = useState(false);
    const [input, setInput] = useState('');
    const {
        rowState,
        rowDispatch,
        answer,
        feedDispatch,
        feedState,
        getAnswer } = useContext(BoardContext);

    const [tries, setTries] = useState(10);

    const renderRow = (row) => {
        if (row.length > 0)
            return row.map(el => <div className="answer">{el}</div>)
    }

    const renderFeed = (feed) => {
        if (feed.length > 0)
            return feed.map(el => <img src={el} />)

    }

    const inputOnChange = (event) => {
        setInput(event.target.value)
    }

    const isCorrect = (arr1, arr2) => {
        console.log(arr1,arr2)
        const parsedAnswer = []
        for(let i in arr1){
            parsedAnswer.push(arr1[i].value)
        }        
        return parsedAnswer.toString() === arr2.toString() ? setWin(true) : setWin(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input.split('').map(el => {
            rowDispatch({ type: `row${rowCount}`, num: el })
        })


        if (answer) {
            const answerCopy = JSON.parse(JSON.stringify(answer))
            feedDispatch({
                type: `feed${rowCount}`,
                num: findCommonEl(input.split(''), answerCopy)
            })
        }
        isCorrect(answer, input.split(''))
        setRowCount(rowCount + 1);
        setTries(tries - 1);

        const form = document.querySelector('form')[0]
        form.value = ''
    }

    const restartGame = () => {
        setRowCount(1);

        for (let row in rowState) {
            rowState[`${row}`] = ""
        }

        for (let feed in feedState) {
            feedState[`${feed}`] = ""
        }

        getAnswer();
        setTries(10);
        setWin(false);

    }

    useEffect(() => {
    }, [])

    return (
        <div className='board'>
            {
                tries === 0 ?
                    <h1 className='game-over'>Game Over</h1>
                    :
                    !win ?
                    (<div className="board-container">
                        <div className="input-container">
                            <div className="header">
                                <div className="life">
                                    <img src={heart} alt="" />
                                    <h1>{tries}</h1>
                                </div>
                                <h1>Combinations</h1>
                            </div>
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
                    </div>)
                    : 

                    <h1 className='winner'>You Won</h1>

            }
            <div className="controls">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='e.g. 1726'
                        type="text"
                        onChange={inputOnChange}
                        pattern="[0-7]{4,4}"
                        required
                        title="need four digit combination use only numbers 0-7"
                    />
                </form>
                <button onClick={restartGame}>
                    <img src={reset} alt='reset' />
                </button>

            </div>

        </div>

    )

}

export default Board;