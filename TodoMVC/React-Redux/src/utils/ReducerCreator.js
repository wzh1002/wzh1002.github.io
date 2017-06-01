let ReducerCreator = (initialState, handles) => {
    return (state = initialState, action = {}) => {
        if (handles.hasOwnProperty(action.type)) {
            return handles[action.type](state, action);
        }
        return state;
    }
};

export default ReducerCreator;