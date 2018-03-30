import visibilityFilter from './visibility-filter';
import deepFreeze from 'deep-freeze';

it('should change visibility filter', () => {
    const inputState = 'SHOW_COMPLETED';
    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    };
    deepFreeze(action);
    deepFreeze(inputState);
    expect(
        visibilityFilter(inputState, action)
    ).toEqual('SHOW_ALL');
});