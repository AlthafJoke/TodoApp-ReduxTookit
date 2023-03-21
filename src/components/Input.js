import React, { useState } from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch  = useDispatch()

    const addTodo = () => {
        console.log('adding input')

        dispatch(saveTodo({
            id: Date.now(),
            item: input,
            done: false,

        }))

    }

  return (
    <div className='inputCard'>
        <input type="text"  value={input}  onChange={e => setInput(e.target.value)}/>
        <button className='addbtn' onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input