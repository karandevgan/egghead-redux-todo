import React, { PureComponent } from 'react';
import FilterLink from './FilterLink';
import store from '../store';

let nextToDoId = 0;

const getVisibleTodos = (todos, filter) => {
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

export default class TodoApp extends PureComponent {

    constructor(props) {
        super(props);
        this.addTodoClickHandler = this.addTodoClickHandler.bind(this);
        this.toggleTodoClickHandler = this.toggleTodoClickHandler.bind(this);
    }

    addTodoClickHandler() {
        if (this.input.value) {
            store.dispatch({
                type: 'ADD_TODO',
                text: this.input.value,
                id: nextToDoId++
            });
            this.input.value = '';
        }
    }

    toggleTodoClickHandler(id) {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }

    render() {
        const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);
        return (
            <div>
                <input
                    type="text"
                    ref={node => {
                        this.input = node;
                    }}
                />
                <button onClick={() => { this.addTodoClickHandler(); }}>
                    Add Todo
                </button>
                <ul>
                    {
                        visibleTodos.map((todo) => {
                            return (
                                <li
                                    key={todo.id}
                                    onClick={() => { this.toggleTodoClickHandler(todo.id); }}
                                    style={{
                                        textDecoration: todo.completed ?
                                            'line-through' :
                                            'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {todo.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter="SHOW_ALL"
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_ACTIVE"
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_COMPLETED"
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}