import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useState } from 'react';
import json from '../task.json';

function App() {
	const localStorageToDo = localStorage.getItem('ToDo_V1'); // obtener informa
	let parsedToDo;
	if (!localStorageToDo) {
		localStorage.setItem('ToDo_V1', JSON.stringify([]));
		parsedToDo = [];
	} else {
		parsedToDo = JSON.parse(localStorageToDo);
	}

	const [tasks, setTasks] = useState(parsedToDo);
	const [searchState, setSearchState] = useState('');
	let taskFound = [];
	const completedTasks = tasks.filter(task => !!task.state).length;
	const numberTasks = tasks.length;

	const saveToDo = newToDos => {
		const stringiFiedToDo = JSON.stringify(newToDos);
		localStorage.setItem('ToDo_V1',stringiFiedToDo);
		setTasks(newToDos);
	};

	const completeToDo = index => {
		const newToDos = [...tasks];
		newToDos[index].state = !newToDos[index].state;
		saveToDo(newToDos);
	};
	const deleteToDo = index => {
		const newToDos = [...tasks];
		newToDos.splice(index, 1);
		saveToDo(newToDos);
	};

	taskFound =
		!searchState >= 1
			? tasks
			: tasks.filter(toDo => {
					const toDoText = toDo.text.toLowerCase();
					const searchText = searchState.toLowerCase();
					return toDoText.includes(searchText);
			  });

	return (
		<>
			<TodoSearch searchState={searchState} setSearchState={setSearchState} />
			<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
				<TodoCounter
					completedTasks={completedTasks}
					numberTasks={numberTasks}
				/>
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

export default App;
