import deepFreeze from 'deep-freeze';
import todos from './todos';

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);
    const actualStateAfter = todos(stateBefore, action);
    expect(actualStateAfter).toEqual(stateAfter);
};

const testToggleTodoFalse = () => {
    const stateBefore = [
        {
            id: 1,
            text: 'Test Todo 1',
            completed: false
        },
        {
            id: 2,
            text: 'Test Todo 2',
            completed: false
        }
    ];
    const stateAfter = [
        {
            id: 1,
            text: 'Test Todo 1',
            completed: true
        },
        {
            id: 2,
            text: 'Test Todo 2',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

const testToggleTodoTrue = () => {
    const stateBefore = [
        {
            id: 1,
            text: 'Test Todo 1',
            completed: true
        },
        {
            id: 2,
            text: 'Test Todo 2',
            completed: false
        }
    ];
    const stateAfter = [
        {
            id: 1,
            text: 'Test Todo 1',
            completed: false
        },
        {
            id: 2,
            text: 'Test Todo 2',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

it('adds a todo successfully', () => {
    testAddTodo();
});

it('toogles a todo to false successfully', () => {
    testToggleTodoFalse();
});

it('toogles a todo to true successfully', () => {
    testToggleTodoTrue();
});