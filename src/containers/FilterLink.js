import React from 'react';
import PropTypes from 'prop-types';
import Link from '../presentation/Link';

class FilterLink extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    };

    componentWillUnmount() {
        this.unsubscribe();
    };

    render() {
        const { store } = this.context;
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

FilterLink.contextTypes = {
    store: PropTypes.object
};

export default FilterLink;