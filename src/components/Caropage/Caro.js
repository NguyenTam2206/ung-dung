import React, { useState} from 'react';
import Board from '../Caropage/Board/Board';
import './Caro.css' ;

const Caro = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const resetClick = () => {
        setSquares({squares: squares})
    }
    const handleClick = i => {
        if (checkWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setSquares(squares);
        setXIsNext(!xIsNext);
      };
    
    const winner = checkWinner(squares);
    
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="container-fluid carobg">
            <div className="container game">
                <div className="game-board">
                    <Board squares={squares} onClick={i => handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <button className="reset" onClick={resetClick}>Reset</button>
            </div>
        </div>
    );
}

function checkWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Caro