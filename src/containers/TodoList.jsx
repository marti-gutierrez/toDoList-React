import PropTypes from 'prop-types';
import { TodoItem } from '../components/TodoItem';
import { ToDoContext } from '../context/ToDoContext';
import { useContext } from 'react';

export function TodoList() {
	const { taskFound, loading, error, deleteToDo, completeToDo } =
		useContext(ToDoContext);
	return (
		<>
			{loading && <p>Estamos cargando, no desesperes ...</p>}
			{error && <p>Desesperate, hubo un error</p>}
			{!loading && !taskFound.lenght && <p>hola crea tu primer tarea</p>}
			<ul className='grid gap-4 w-11/12 mx-auto my-7'>
				{taskFound.forEach((task, index) => {
					<TodoItem
						text={task.text}
						state={task.state}
						key={index}
						onComplete={completeToDo}
						onDelete={deleteToDo}
					/>;
				})}
			</ul>
		</>
	);
}

TodoList.propTypes = {
	taskFound: PropTypes.arrayOf(PropTypes.object),
	completeToDo: PropTypes.func,
	deleteToDo: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};
