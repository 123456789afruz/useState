import './App.css'
import React from 'react'

import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [open, setOpen] = useState('Открыть')


  const change = () => {
    setImg(!img)
    setOpen(img ? 'Открыть' : 'Закрыть')
  }
  console.log(num)

  return (
    <>
      <div className="box">
        <button onClick={change}>{open} фото</button>
        {img && <img src="https://cdn.britannica.com/58/258358-050-E786E676/gabe-vincent-of-miami-heat-draws-foul-against-anthony-edwards-during-basketball-game-2021.jpg" alt="" />}
        
      </div>

      <div className="box">
        <h4>{text}</h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> 
      </div>

      <div className="box">
        <h4>{num}</h4>
        <button onClick={() => setNum(num + 1)}>Добавить число</button>
        <button onClick={() => setNum(num - 1)}>Уменьшить число</button>
        <button onClick={() => setNum(num * 2)}>Удвоить число</button>
        <button onClick={() => setNum(num / 2)}>Разделить число на два</button>
        <button onClick={() => setNum(num * 0)}>Обнулить число</button>
      </div>

    </>
  )
}

export default App


