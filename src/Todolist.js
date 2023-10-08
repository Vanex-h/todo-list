import React, { useState } from 'react';
import "../src/App.css"

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

        setList([...list, newTask]);
        setInputTask('');
    };

    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            handleAddTodo();
        }
    };

    return (
        <div className="Todo">
            <h1>Do it</h1>

            <div className="Top">
                <input
                    className="input"
                    type="text"
                    value={inputTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} 
                    placeholder="Enter a task"
                />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

            <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
