import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { useState } from 'react';
import json from '../task.json';

function App() {
	const [tasks, setTasks] = useState(json);
	const [searchState, setSearchState] = useState('');
	let taskFound = [];
	const completedTasks = tasks.filter(task => task.state).length;
	const numberTasks = tasks.length;

	const completeToDo = index => {
		const newToDos = [...tasks];
		newToDos[index].state = !newToDos[index].state;
		setTasks(newToDos);
	};
	const deleteToDo = index => {
		const newToDos = [...tasks];
		newToDos.splice(index,1);
		setTasks(newToDos);
	}

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
