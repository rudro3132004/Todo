import React from 'react'
import { FcTodoList } from "react-icons/fc";
import ThemeBtn from './ThemeBtn';

export default function TopBar() {
  return (
    <div className='bg-[#f39c12] p-2 md:p-3'>
        <div className="md:max-w-[85%] mx-auto flex items-center justify-between px-5 text-white">
            <div className="flex justify-center items-center text-xl font-semibold sm:text-2xl"> <FcTodoList className='mr-2' />TodoList </div>
            <div className="cursor-pointer">
               <ThemeBtn/>
            </div>
        </div>
    </div>
  )
}
