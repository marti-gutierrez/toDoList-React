import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const tasks = [
	{
		text: 'limpiar la estufa',
		state: false,
	},
	{
		text: 'Terminar la libreria del lcd 16x2',
		state: true,
	},
	{
		text: 'Lavar las jergas',
		state: false,
	},
];

function App() {
	return (
		<>
			<TodoSearch />
			<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
				<TodoCounter />
				<TodoList>
					{tasks.map((task, index) => (
						<TodoItem text={task.text} state={task.state} key={index} />
					))}
				</TodoList>
				<CreateTodoButton />
			</div>
		</>
	);
}

export default App;
