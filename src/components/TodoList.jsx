import PropTypes from 'prop-types';

export function TodoList(props) {
	return <ul className='grid gap-4 w-11/12 mx-auto my-7'>{props.children}</ul>;
}

TodoList.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element)
}