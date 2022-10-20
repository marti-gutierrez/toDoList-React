import PropTypes from 'prop-types';

export function TodoSearch({ searchState, setSearchState }) {
	const handleChange = event => {
		setSearchState(event.target.value);
	};
	return (
		<input
			type='text'
			value={searchState}
			placeholder='buscador..'
			className=' block w-4/6 py-1 pl-8 bg-blue-500 text-slate-50 placeholder:text-slate-300 '
			onChange={handleChange}
		/>
	);
}

TodoSearch.propTypes = {
	searchState: PropTypes.string,
	setSearchState: PropTypes.func,
};
