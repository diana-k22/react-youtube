import React from 'react'
import TodoList from './Todo/TodoList'


function App() {
  const todos = [
    { id:1, completed: false, title: 'Купить хлеб'},
    { id:2, completed: false, title: 'Купить масло'},
    { id:3, completed: false, title: 'Купить молоко'}
  ]

  return (
    <div className='wrapper'>
      <h1>React</h1>

      {/* Чтобы todos массив отобразить в TodoList для этого надо обозначить ккакие свойства мы будет принимать
          придумываем название св-ва которое будет принимать массив todos и передаем в фиг. скобках массив
          теперь свойства надо принять переходим в файл Todolist.js*/}
      <TodoList todos={todos}/>
    </div>)


  
  

}

export default App;
