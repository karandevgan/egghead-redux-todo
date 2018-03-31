import React from 'react';
import Link from '../presentation/Link';
import store from '../store';

class FilterLink extends React.Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    render() {
        const props = this.props;
        const state = store.getState();
        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={(e) => {
                    e.preventDefault();
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    });
                }}
            >
                {props.children}
            </Link>
        );
    }
};

export default FilterLink;