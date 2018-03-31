import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../presentation/TodoList';

class VisibleTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.getVisibleTodos = this.getVisibleTodos.bind(this);
        this.onToggleTodoClick = this.onToggleTodoClick.bind(this);
    }

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    onToggleTodoClick(id) {
        const { store } = this.context;
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }

    getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter((t) => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter((t) => !t.completed);
            default:
                return todos;
        }
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <TodoList
                todos={this.getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={this.onToggleTodoClick}
            />
        );
    }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
};

export default VisibleTodoList;