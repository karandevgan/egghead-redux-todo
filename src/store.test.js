import store from './store';

it('should have an empty initial state', () => {
    const actualState = store.getState();
    const expectedState = { todos: [], visibilityFilter: 'SHOW_ALL' };
    expect(actualState).toEqual(expectedState);
});

it('should dispatch add todo successfully', () => {
    store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'Learning Redux'
    });
    const actualState = store.getState();
    const expectedState = {
        todos: [
            {
                id: 1,
                text: 'Learning Redux',
                completed: false
            }
        ],
        visibilityFilter: 'SHOW_ALL'
    };
    expect(actualState).toEqual(expectedState);
});

it('should dispatch toggle todo successfully', () => {
    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 1
    });
    const actualState = store.getState();
    const expectedState = {
        todos:
            [
                {
                    id: 1,
                    text: 'Learning Redux',
                    completed: true
                }
            ],
        visibilityFilter: 'SHOW_ALL'
    };
    expect(actualState).toEqual(expectedState);
});

it('should change visibility filter without effecting todos', () => {
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    });
    const actualState = store.getState();
    const expectedState = {
        todos:
            [
                {
                    id: 1,
                    text: 'Learning Redux',
                    completed: true
                }
            ],
        visibilityFilter: 'SHOW_COMPLETED'
    };
    expect(actualState).toEqual(expectedState);
});