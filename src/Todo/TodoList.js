import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

// 1 способ подключения стилей

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

// Надо указать что эти стили мы задаем к какому-то эл-ту


// Чтобы принять св-ва из App.js для этого в качестве входных параметров мы принимаем props  это объект у которого есть ключ todos
function TodoList(props) {
    return (
        // Для этого есть атрибут style и для того чтобы задавать какие-либо значения атрибутом за место "" указываем {}
        <ul style={styles.ul}>  

        {/* Если мы проводим итерацию  в реакте, то для каждого объекта который явл итерируемым нужно указать ключ key={}
            Если хотим выводить индекс, то прописываем вторым значением  */}
            { props.todos.map((todo, index) => {
                // Как отдельное св-во можем передать index в компонент
                return <TodoItem  todo={todo} key={todo.id}  index={index} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
}

export default TodoList