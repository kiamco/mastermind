import React from 'react';
import "./styles/index.scss";
import Board from './components/board.js';
import {BoardProvider} from './context/boardContext.js'
import HomePage from './page/home.js'

function App() {
  return (
    <BoardProvider>
    <div className="App">
        <HomePage/> 
    </div>
    </BoardProvider>
  );
 }

export default App;
