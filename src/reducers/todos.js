const addTodo = (todo) => {
    return {
        ...todo,
        completed: false
    };
};

const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    };
};

const todo = (state, action) => {
    const { type, ...rem } = action;
    switch (type) {
        case 'ADD_TODO':
            return addTodo(rem);
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            } else {
                return toggleTodo(state);
            }
        default:
            return state;
    }
};

const todos = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map((t) => todo(t, action));
        default:
            return state;
    }
};

export default todos;