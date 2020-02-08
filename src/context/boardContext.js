import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const BoardContext = createContext();

export const BoardProvider = (props) => {
    const [rows, setRows] = useState({
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
    })

    const [keys] = useState('12345678');

    const colors =["red","yellow","green","light-blue","ocean-blue","dark-blue","purple","pink"]

        return (
        <BoardContext.Provider value={{rows,setRows,keys,colors }}>
            {props.children}
        </BoardContext.Provider>
    )
}