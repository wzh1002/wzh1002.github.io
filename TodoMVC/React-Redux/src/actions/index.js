import * as type from '../constants/ActionTypes';
import ActionCreator from '../utils/ActionsCreator';

let addTodo = ActionCreator(type.ADD_TODO, 'text');
let deleteTodo = ActionCreator(type.DELETE_TODO, 'id');
let editTodo = ActionCreator(type.EDIT_TODO, 'id', 'text');
let completeTodo = ActionCreator(type.COMPLETE_TODO, 'id');
let completeAll = ActionCreator(type.COMPLETE_ALL);
let clearCompleted = ActionCreator(type.CLEAR_COMPLETED);

export {
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted
};
