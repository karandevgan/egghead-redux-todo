import React from 'react';
import store from '../store';

let nextToDoId = 0;

const addTodoClickHandler = (value) => {
    if (value) {
        store.dispatch({
            type: 'ADD_TODO',
            text: value,
            id: nextToDoId++
        });
    }
};

const AddTodo = () => {
    let input;
    return (
        <div>
            <input
                type="text"
                ref={node => {
                    input = node;
                }}
            />
            <button
                onClick={() => {
                    addTodoClickHandler(input.value);
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;