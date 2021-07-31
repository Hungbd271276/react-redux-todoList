export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const AddTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const DeleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}


export const UpdateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}