import { useState } from 'react'
import './style.scss'

function Square({value, onSquareClick}){  // Square元件可以傳遞一個prop叫做value
  // const [value, setValue] = useState('\u2060')  // \u2060 is an invisible character

  return(
    <button className='square' onClick={onSquareClick}>
    {value}
    </button>
  );
}


export default function Board() {
  const [xIsNext, setxIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill('\u2060'));  // 將九個格子區分開來，所以宣告長度為9的陣列，後續可以傳入新的值
  
  function handleClick(i){
   // if(squares[i]!='\u2060'){  //  如果squares[i]已經有值(不為\u2060)，則提早return，結束該btn的handleClick
   if(squares[i] != '\u2060' || calculateWinner(squares)){
    return;
   }
  const newSquares = squares.slice()
  if(xIsNext){
    newSquares[i] = 'X'
  }
  else{
    newSquares[i] = 'O'
  }
  setSquares(newSquares)  // newSquares帶入[0]的話，button高度又會壞掉，待確認
  setxIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);  // 達成calculateWinner且參數為squares時，出現winner
  let status;
  if(winner){
    status = 'Winner： ' + winner;
  }
  else{
    status = 'Next player： ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
          <h1>圈圈叉叉</h1>
          <div className="status">{status}</div>
            <div className="board">
              <div className="btnRow1">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
              </div>
              <div className="btnRow2">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
              </div>
              <div className="btnRow3">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
              </div>
            </div>
    </div>
  )
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i=0; i<lines.length; i++){
    const [a, b, c] = lines[i]
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

// export default Board
