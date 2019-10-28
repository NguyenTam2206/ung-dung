import React from "react";
import Square from "../Square/Square";
import './Board.css';

const Board = (props) => {
    const renderSquares = (numbs) => {
        return numbs.map ((num,key) => {
            return <Square key = {key} value={ props.squares[num]} onClick={() => props.onClick(num)}></Square>
        }) 
    }
    return (
        <div>
            <div className="board-row">{renderSquares([0, 1, 2])}</div>
            <div className="board-row">{renderSquares([3, 4, 5])}</div>
            <div className="board-row">{renderSquares([6, 7, 8])}</div>
        </div>
    );
}

export default Board;