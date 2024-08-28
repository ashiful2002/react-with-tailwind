import React from 'react'
import tick from '../../src/assets/tick.png'
import not_tick from '../../src/assets/not_tick.png'
import delete_icon from '../../src/assets/delete.png'


const TodosItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? tick : not_tick} alt="tik" className='w-7 ' />
                <p className={`text-slate-700 ml-4 text-lg decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                    {
                        text
                    }
                </p>
            </div>

            <img onClick={() => { deleteTodo(id) }} className='w-3.5 ' src={delete_icon} alt="delete icon" />
        </div>
    )
}

export default TodosItems
