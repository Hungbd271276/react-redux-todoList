import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTodo, UpdateTodo } from '../redux/Action';

const TodoItem = ({ todo }) => {
    const [edittable, setEdittable] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{todo.id.length > 1 ? todo.id[1] : todo.id}</th>
                            <td>
                                {edittable ? <input type="text" className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} /> : <h4>{todo.name}</h4>}

                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch(UpdateTodo({
                                            ...todo,
                                            name: name
                                        }))
                                        if (edittable) {
                                            setName(todo.name)
                                        }
                                        setEdittable(!edittable);

                                    }}
                                    className=" btn btn-primary m-2">{edittable ? "update" : "Edit"}</button>
                                <button
                                    onClick={() => dispatch(DeleteTodo(todo.id))}
                                    className="btn btn-danger m-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default TodoItem
