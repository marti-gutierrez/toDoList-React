import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

export default function AppUI({
	searchState,
	setSearchState,
	completedTasks,
	numberTasks,
	loading,
	error,
	taskFound,
	completeToDo,
	deleteToDo,
}) {
	return (
		<>
			<TodoSearch searchState={searchState} setSearchState={setSearchState} />
			<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
				<TodoCounter
					completedTasks={completedTasks}
					numberTasks={numberTasks}
				/>
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
