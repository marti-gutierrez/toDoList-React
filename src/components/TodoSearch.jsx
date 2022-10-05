import { FaGithub } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { ToDoContext } from '../context/ToDoContext';

export function TodoSearch() {
	const {searchState,setSearchState} = ToDoContext;
	const handleChange = event => {
		setSearchState(event.target.value);
	};
	return (
		<div className='grid gap-5 w-11/12 mx-auto my-8'>
			<figure className='justify-self-end'>
				<FaGithub className='w-8 h-8' />
			</figure>
			<h1 className='text-2xl font-bold text-slate-50'>To-do list</h1>
			<form action='' className='relative flex'>
				<input
					type='text'
					value={searchState}
					placeholder='buscador..'
					className=' block w-4/6 py-1 pl-8 bg-blue-500 text-slate-50 placeholder:text-slate-300 '
					onChange={handleChange}
				/>
				<BiSearchAlt className='absolute top-1 left-0 w-7 h-7 text-slate-50 text-2xl' />
			</form>
		</div>
	);
}

TodoSearch.propTypes = {
	searchState: PropTypes.string,
	setSearchState: PropTypes.func
}