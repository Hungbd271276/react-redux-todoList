import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux/Action';
import { v4 as uuidv4 } from 'uuid';
const TodoInput = () => {
    const dispatch = useDispatch();
    let [name, setName] = useState();

    return (
        <div >
            <div className="container">
                <div className="row">
                    <div>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            className="form-control" />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                dispatch(
                                    AddTodo(
                                        {
                                            id: uuidv4(),
                                            name: name
                                        }
                                    )

                                )
                                setName('');
                            }}
                            className=" btn btn-primary ">Add</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoInput
