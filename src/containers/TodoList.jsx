import PropTypes from 'prop-types';
import { TodoItem } from '../components/TodoItem';

export function TodoList({
	taskFound,
	completeToDo,
	deleteToDo,
	loading,
	error,
}) {
	return (
		<>
			<ul className='grid gap-4 w-11/12 mx-auto my-7'>
				{loading && <p>Estamos cargando, no desesperes ...</p>}
				{error && <p>Desesperate, hubo un error</p>}
				{!loading && !taskFound.lenght && <p>hola crea tu primer tarea</p>}
				{taskFound.forEach((task, index) => {
					<TodoItem
						text={task.text}
						state={task.state}
						key={index}
						onComplete={() => completeToDo(index)}
						onDelete={() => deleteToDo(index)}
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
