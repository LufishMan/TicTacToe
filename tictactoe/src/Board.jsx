import { useState } from 'react'
import './square.scss'

function Square(){  // Square元件可以傳遞一個prop叫做value
  const [value, setValue] = useState(null)

  function handleClick(){
    setValue('X')
  }

  return(
  <button className='square' onClick={handleClick}>{value}</button>
)}

function Board() {
  return (
    <div>
          <h1>圈圈叉叉</h1>
            <div className="board">
              <div className="btnRow1">
                <Square />
                <Square />
                <Square />
              </div>
              <div className="btnRow2">
                <Square />
                <Square />
                <Square />
              </div>
              <div className="btnRow3">
                <Square />
                <Square />
                <Square />
              </div>
            </div>
    </div>
  )
}

export default Board
