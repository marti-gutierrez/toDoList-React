import { FaGithub } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types'

export default function ToDoHeader({children}) {
	return (
		<header className='grid gap-5 w-11/12 max-w-4xl mx-auto my-8'>
			<figure className='justify-self-end'>
				<FaGithub className='w-8 h-8' />
			</figure>
			<h1 className='text-2xl font-bold text-slate-50'>To-do list</h1>
			<form action='' className='relative flex'>
        {children}
				<BiSearchAlt className='absolute top-1 left-0 w-7 h-7 text-slate-50 text-2xl' />
			</form>
		</header>
	);
}

ToDoHeader.propTypes = {
  children: PropTypes.element
}
