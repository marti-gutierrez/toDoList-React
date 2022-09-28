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
		state: false,
	},
	{
		text: 'Lavar las jergas',
		state: true,
	},
];

function App() {
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{tasks.map((task, index) => (
					<TodoItem text={task.text} state={task.state} key={index} />
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
