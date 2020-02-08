import React, { useState, createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

export const BoardContext = createContext();

export const BoardProvider = (props) => {

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


    const [keys] = useState('12345678');

    const colors =["red","yellow","green","light-blue","ocean-blue","dark-blue","purple","pink"]

        return (
        <BoardContext.Provider value={{rowState,dispatch,keys,colors }}>
            {props.children}
        </BoardContext.Provider>
    )
}