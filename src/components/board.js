import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../context/boardContext.js'
const Board = () => {

    const { rowState, dispatch, keys, colors } = useContext(BoardContext)

    const renderRow = (row) => {
        if (row.length > 0)
            return row.map(el => <div className="answer">{el}</div>)
    }

    // const onKeyClick = (e, rowNumber) => {
    //     e.preventDefault()
    //     setRows(
    //         {
    //             ...rows,
    //             row2:
    //                 [
    //                     ...rowNumber,
    //                     ...e.currentTarget.textContent
    //                 ]
    //         }
    //     )
    // }

    useEffect(() => {
    }, [])

    return (
        <>
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
                            onClick={(e) => dispatch({ type: 'row2', num: e.currentTarget.textContent})}>
                            {el}
                        </button>)
                })}
            </div>
        </>
    )
}

export default Board;