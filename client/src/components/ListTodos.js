import React, {Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5001/todos");
            const jsondata = await response.json();
            
            setTodos(jsondata);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTodos();
    }, []);

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
      <tr>
        <td>{todo.description}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </tbody>
    ))}
  </table>
        </Fragment>
    );
}; 

export default ListTodos;