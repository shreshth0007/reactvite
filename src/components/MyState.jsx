import React from 'react'
import {useState} from 'react'

export const MyState = () => {
    const [counter,setcounter]= useState(10)
  return (
    <div>
        <h1>
            counter = {counter}
            
        </h1>
    </div>
  )
}
export default MyState