import React from 'react';
import PropTypes from 'prop-types';

let nextToDoId = 0;

const addTodoClickHandler = (store, value) => {
    if (value) {
        store.dispatch({
            type: 'ADD_TODO',
            text: value,
            id: nextToDoId++
        });
    }
};

const AddTodo = (props, { store }) => {
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
                    addTodoClickHandler(store, input.value);
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

AddTodo.contextTypes = {
    store: PropTypes.object
};

export default AddTodo;