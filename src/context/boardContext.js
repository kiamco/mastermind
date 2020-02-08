import React, { useState, createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

export const BoardContext = createContext();

export const BoardProvider = (props) => {

    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&format=plain&rnd=new&base=10')
        .then(numbers => {
            setAnswer(numbers.data.split('\n'))
        })
        .catch(err => console.error(err));


    },[])

    answer.length = 4

    console.log(answer)
    const rowReducer = (state, action) => {
        switch (action.type) {
            case 'row1':
                return {
                    ...state,
                    row1: [
                        ...state.row1,
                        ...action.num
                    ]
                }
            case 'row2':
                return {
                    ...state,
                    row2: [
                        ...state.row2,
                        ...action.num
                    ]
                }
            case 'row3':
                return {
                    ...state,
                    row3: [
                        ...state.row3,
                        ...action.num
                    ]
                }
            case 'row4':
                return {
                    ...state,
                    row4: [
                        ...state.row4,
                        ...action.num
                    ]
                }
            case 'row5':
                return {
                    ...state,
                    row5: [
                        ...state.row5,
                        ...action.num
                    ]
                }
            case 'row6':
                return {
                    ...state,
                    row6: [
                        ...state.row6,
                        ...action.num
                    ]
                }
            case 'row7':
                return {
                    ...state,
                    row7: [
                        ...state.row7,
                        ...action.num
                    ]
                }
            case 'row8':
                return {
                    ...state,
                    row8: [
                        ...state.row8,
                        ...action.num
                    ]
                }
            case 'row9':
                return {
                    ...state,
                    row9: [
                        ...state.row9,
                        ...action.num
                    ]
                }
            case 'row10':
                return {
                    ...state,
                    row10: [
                        ...state.row10,
                        ...action.num
                    ]
                }
            default:
                console.log('err')

        }
    }

    const [rowState, dispatch] = useReducer(rowReducer, {
        row1:[],
        row2: [],
        row3: [],
        row4: [],
        row5: [],
        row6: [],
        row7: [],
        row8: [],
        row9: [],
        row10: []
    });

        return (
        <BoardContext.Provider value={{rowState,dispatch,answer}}>
            {props.children}
        </BoardContext.Provider>
    )
}