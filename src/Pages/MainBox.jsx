import React, { useState } from 'react'
import TodoCreate from '../Components/TodoCreate'
import TodoBox from '../Components/TodoBox'

export default function MainBox() {
  const [autoReloade, setAutoReloade] = useState();
  return (
    <div className='w-full h-screen dark:bg-zinc-800 overflow-auto duration-300'>
        <TodoCreate setAutoReloade={setAutoReloade}/>
        <TodoBox autoReloade={autoReloade}/>
    </div>
  )
}
