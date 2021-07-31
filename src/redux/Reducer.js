import totosTate from './State';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './Action';
const Reducer = (state = totosTate, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = [...state];
            newTodo.push(action.payload);
            return newTodo;
        case DELETE_TODO:
            let newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload)
            return newTodos;
        case UPDATE_TODO:
            let newtodo = [...state];
            let index = -1
            for (let i = 0; i < newtodo.length; i++) {
                index++;
                if (newtodo[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newtodo[index] = action.payload
            }
            return newtodo;
    }
    return state
}
export default Reducer