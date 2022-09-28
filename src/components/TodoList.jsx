import PropTypes from 'prop-types';

export function TodoList(props) {
	return <ul>{props.children}</ul>;
}

TodoList.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element)
}

