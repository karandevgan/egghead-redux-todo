import React, { PureComponent } from 'react';
import store from '../store';

let nextToDoId = 0;

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
                        this.props.todos.map((todo) => {
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
            </div>
        );
    }
}