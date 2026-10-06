import { useState } from 'react'
import './App.css'
import ImageManipulation from './components/ImageManipulation'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <ImageManipulation />
    </>
  )
}

export default App

