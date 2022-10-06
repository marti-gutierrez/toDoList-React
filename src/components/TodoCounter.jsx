<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> newMain
import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export function TodoCounter() {
<<<<<<< HEAD
	const {completedTasks,numberTasks} = useContext(ToDoContext);
=======
	const { completedTasks, numberTasks } = useContext(ToDoContext);
>>>>>>> newMain
	return (
		<section className='flex w-max ml-5 pt-5 pb-1 border-b-2 border-blue-400'>
			<h2 className=' font-medium'>All tasks</h2>
			<span className='inline-block w-6 h-6 ml-2 rounded-l-full bg-blue-200 text-center'>
				{completedTasks}
			</span>
			<span className='inline-block w-6 h-6 rounded-r-full bg-blue-400 text-center'>
				{numberTasks}
			</span>
		</section>
	);
}
