import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../context/boardContext.js'
const Board = () => {

    const { rows, setRows, keys, colors } = useContext(BoardContext)

    const renderRow = (row) => {
        if (row.length > 0)
            return row.map(el => <div className="answer">{el}</div>)
    }

    const onKeyClick = (e) => {
        e.preventDefault()
        setRows(
            {
                ...rows,
                row1:
                    [
                        ...rows.row1,
                        ...e.currentTarget.textContent
                    ]
            }
        )
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="board-container">
                <div className="input-container">
                    <div className="input">
                        {renderRow(rows.row1)}
                    </div>
                    <div className="input">
                        {renderRow(rows.row2)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row3)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row4)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row5)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row6)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row6)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row7)}

                    </div>
                    <div className="input">
                        {renderRow(rows.row8)}
                    </div>
                    <div className="input">
                        {renderRow(rows.row9)}
                    </div>
                    <div className="input">
                        {renderRow(rows.row10)}
                    </div>
                </div>
                <div className="feedback-container">
                    <h1>Feedback</h1>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                    <div className="feedback"></div>
                </div>
            </div>
            <div className="keyboard">
                {keys.split("").map((el, i) => {
                    return (
                        <button
                            className={`key ${colors[i]}`}
                            onClick={onKeyClick}>{el}
                        </button>)
                })}
            </div>
        </>
    )
}

export default Board;