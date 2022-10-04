import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from './TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import PropTypes from 'prop-types';

export function TodoContainer({
	completedTasks,
	numberTasks,
	taskFound,
	loading,
	error,
	completeToDo,
	deleteToDo,
}) {
	return (
		<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
			<TodoCounter completedTasks={completedTasks} numberTasks={numberTasks} />
			<TodoList
				taskFound={taskFound}
				loading={loading}
				error={error}
				completeToDo={completeToDo}
				deleteToDo={deleteToDo}
			/>
			<CreateTodoButton />
		</div>
	);
}

TodoContainer.propTypes = {
	completedTasks: PropTypes.number,
	numberTasks: PropTypes.number,
	taskFound: PropTypes.arrayOf(PropTypes.object),
	completeToDo: PropTypes.func,
	deleteToDo: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};
