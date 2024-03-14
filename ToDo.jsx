import React, { useState } from 'react';
import '../App.css'

    function TodoList() {
        const [todos, setTodos] = useState([]);
        const [inputText, setInputText] = useState('');
        
        const handleInputChange = (event) => {
          setInputText(event.target.value);
        };
      
        const handleAddTodo = () => {
          if (inputText.trim() !== '') {
            setTodos([...todos, inputText]);
            setInputText('');
          }
        };
      
        const handleDeleteTodoList = (index) => {
          const updatedTodos = todos.filter((_, i) => i !== index);
          setTodos(updatedTodos);
        };
      
        return (
            <div className='ToDo'>
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Enter todo"
                />
                <button onClick={handleAddTodo} className='button-toDo'>Add Todo</button><br /><br />
                {todos.map((todo, index) => (
                    <div key={index} className='todo-table'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{todo}</td>
                                        <td>
                                            <button onClick={() => handleDeleteTodoList(index)} className='delete-button'>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                ))}
            </div>
        );
    }

export default TodoList;
