import React, { useEffect, useState } from 'react'
import Todo from './Todo'

export default function TodoBox(props) {
  const [todoList, setTodoList] = useState(() => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });
  useEffect(()=>{
   const todos = localStorage.getItem('todos');
   setTodoList(JSON.parse(todos))
  },[props.autoReloade])


  const handleUpdate = (id, field, value) => {
    const updatedTodos = todoList.map(todo =>
      todo.id === id ? { ...todo, [field]: value } : todo
    );

    setTodoList(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  const handleDelete = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="md:max-w-[85%] mx-auto z-10">
      {todoList.length !== 0 ? (
        <section
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 
                    gap-2 lg:gap-8 px-2"
        >
          {[...todoList].reverse().map((elm) => (
            <Todo
              key={elm.id}
              id={elm.id}
              title={elm.title}
              content={elm.note}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </section>
      ) : (
        <h1 className="block text-xl text-black/60 dark:text-white/70 text-center">
          Please Create A Note
        </h1>
      )}
    </div>

  );
}
