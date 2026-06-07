import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    // Get the todos
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5001/todos");
            const jsondata = await response.json();

            setTodos(jsondata);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    // Delete a todo

    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`,
                {
                method: "DELETE"
            });
            
            setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {todos.map(todo => (
                    <tbody>
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>
                                <button className="btn btn-danger" 
                                onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                                </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </Fragment>
    );
};

export default ListTodos;