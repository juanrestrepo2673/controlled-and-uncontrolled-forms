import React, { useRef, useState } from 'react'




function TodoApp() {

  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();

  const addTask = () => {
    const newTask = taskInputRef.current.value;
    if (newTask) {
      setTasks([...tasks, newTask]);
      taskInputRef.current.value = '';
    }
  }

  return (
    <section>

      <div>
        <input ref={taskInputRef} placeholder='Nueva Task' />
        <button onClick={addTask}>Agregar Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>

    </section>
  )
}

export default TodoApp