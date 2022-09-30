import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export function TodoItem({ text, state = false }) {
	const deleteTask = task => alert(`Borrando Tarea ${text}`);
	const completeTask = task => alert(`Se finalizo la Tarea ${text}`);
	return (
		<li className='grid grid-cols-[28px_1fr_28px] justify-start gap-4 items-center w-full p-2 bg-slate-50 rounded-md shadow-md'>
			<FaTrashAlt
				className='text-slate-400 justify-self-center'
				onClick={deleteTask}
			/>
			<p className={state ? 'line-through text-slate-500' : ''}>{text}</p>
			<span className={state ? 'task bg-blue-400' : 'task'}>
				<FaCheck className='text-slate-50' onClick={completeTask}/>
			</span>
		</li>
	);
}

TodoItem.propTypes = {
	text: PropTypes.string,
	state: PropTypes.bool,
};
