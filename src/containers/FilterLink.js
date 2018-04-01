import { connect } from 'react-redux';
import setVisibilityFilter from '../actions/setVisibilityFilter';
import Link from '../presentation/Link';

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            dispatch(setVisibilityFilter(props.filter));
        }
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;