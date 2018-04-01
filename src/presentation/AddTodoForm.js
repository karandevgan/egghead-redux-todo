import React from 'react';

const onSubmitHandler = (e, onSubmit, input) => {
    e.preventDefault();
    onSubmit(input.value);
    input.value = '';
}

const AddTodoForm = ({ onSubmit }) => {
    let input;
    return (
        <form
            onSubmit={(e) => onSubmitHandler(e, onSubmit, input)}
        >
            <input
                type="text"
                ref={node => {
                    input = node;
                }}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodoForm;