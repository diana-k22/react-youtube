import React from 'react'



export default function TodoItem ({ todo, index }) {
    return (
        <li>
    {/* index будем выводить в тэге strong где в {} будем выводить индекс. Для того чтобы индекс показывался с 1, нужно поставить + 1 */}
            <strong>{index +1}</strong>
            {todo.title}
        </li>
    )
}