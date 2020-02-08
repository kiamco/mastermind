import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from '../context/boardContext.js'
const Board = () => {

    const [rowCount, setRowCount] = useState(1);
    const [input, setInput] = useState('');
    const { rowState, dispatch, answer } = useContext(BoardContext)
    const findCommonEl = (array1,array2) => {

    }

    const findCommonElByIndex = (array1,array2) => {
        let obj = {};
        let checklist =[]
        for (let i = 0; i < array1.length; i++) {
            if(!obj[array1[i]]){
                obj[array1[i]] = true
                console.log(obj)
            }
        }

        for (let k = 0; k < array2.length; k++){
            if (obj[array2[k]]){
                console.log('hi', obj[array2[k]])
                checklist.push(true);
            } else{
                checklist.push(false);
            }
        }

        return checklist;
    }

    const renderRow = (row) => {
        if (row.length > 0)
            return row.map(el => <div className="answer">{el}</div>)
    }

    const inputOnChange = (event) => {
        setInput(event.target.value)
        console.log(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input.split('').map(el => {
            dispatch({ type: `row${rowCount}`,num:el })
        })

        if (answer) {
            console.log(answer, input)
            console.log(findCommonElByIndex(answer,input.split('')))

        }
        setRowCount(rowCount + 1);
        
    }

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
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={inputOnChange}
                pattern="[0-7]{4,4}" required title="need four digit combination use only numbers 0-7"
                />
            </form>
        </>
    )
}

export default Board;