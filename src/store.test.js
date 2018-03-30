import store from './store';

it('should have an empty initial state', () => {
    const actualState = store.getState();
    const expectedState = [];
    expect(actualState).toEqual(expectedState);
});

it('should dispatch add todo successfully', () => {
    store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'Learning Redux'
    });
    const actualState = store.getState();
    const expectedState = [
        {
            id: 1,
            text: 'Learning Redux',
            completed: false
        }
    ];
    expect(actualState).toEqual(expectedState);
});

it('should dispatch toggle todo successfully', () => {
    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 1
    });
    const actualState = store.getState();
    const expectedState = [
        {
            id: 1,
            text: 'Learning Redux',
            completed: true
        }
    ];
    expect(actualState).toEqual(expectedState);
});