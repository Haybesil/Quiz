import { useState } from 'react'
import './App.css'
import Quiz from './component/quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all-body'>
      <Quiz/>
    </div>
  )
}

export default App
