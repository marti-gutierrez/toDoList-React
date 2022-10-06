import { TodoCounter } from './../components/TodoCounter';
import { TodoSearch } from './../components/TodoSearch.jsx';
import { TodoList } from './../components/TodoList.jsx';
import { TodoItem } from '../components/TodoItem.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton.jsx';
import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export default function AppUI() {
	const { taskFound, loading, error, completeToDo, deleteToDo, numberTasks } =
		useContext(ToDoContext);
	return (
		<>
			<TodoSearch />
			<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
				<TodoCounter />
				{loading && <p>Estamos cargando, no desesperes ...</p>}
				{error && <p>Desesperate, hubo un error</p>}
				{!loading && !numberTasks && <p>hola crea tu primer tarea</p>}
				<TodoList>
					{taskFound.map((task, index) => (
						<TodoItem
							text={task.text}
							state={task.state}
							key={index}
							onComplete={() => completeToDo(index)}
							onDelete={() => deleteToDo(index)}
						/>
					))}
				</TodoList>
				<CreateTodoButton />
			</div>
		</>
	);
}
