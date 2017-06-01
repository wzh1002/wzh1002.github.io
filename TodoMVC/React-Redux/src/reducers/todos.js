import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'
import { uuid } from '../utils';
import ReducerCreator from '../utils/ReducerCreator';

let reducers = {
    [ADD_TODO](state, action) {
        return [
            {
                id: uuid(),
                completed: false,
                text: action.text
            },
            ...state
        ];
    },
    [DELETE_TODO](state, action) {
        return state.filter(todo =>
            todo.id !== action.id
        );
    },
    [EDIT_TODO](state, action) {
        return state.map(todo =>
                todo.id === action.id ?
                { ...todo, text: action.text } :
                    todo
        );
    },
    [COMPLETE_TODO](state, action) {
        return state.map(todo =>
                todo.id === action.id ?
                { ...todo, completed: !todo.completed } :
                    todo
        );
    },
    [COMPLETE_ALL](state, action) {
        const areAllMarked = state.every(todo => todo.completed);
        return state.map(todo => ({
            ...todo,
            completed: !areAllMarked
        }));
    },
    [CLEAR_COMPLETED](state, action) {
        return state.filter(todo => todo.completed === false);
    }
};

export default ReducerCreator([], reducers);