import React from 'react';
import "./styles/index.scss";
import Board from './components/board.js';
import {BoardProvider} from './context/boardContext.js'

function App() {
  return (
    <BoardProvider>
    <div className="App">
        <Board /> 
    </div>
    </BoardProvider>
  );
 }

export default App;
