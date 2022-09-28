import PropTypes from 'prop-types';

export function TodoItem({ text, state = false }) {
	return (
		<li>
			<span>true</span>
			<span>false</span>
			<p>{text}</p>
			<span>Tarea {state ? 'terminada' : 'incopleta'}</span>
		</li>
	);
}

TodoItem.propTypes = {
	text: PropTypes.string,
	state: PropTypes.bool
}