import { TodoContainer } from './containers/TodoContainer';
import { TodoSearch } from './components/TodoSearch';
import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [item, setItem] = useState(initialValue);
	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let itemParsed;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					itemParsed = initialValue;
				} else {
					itemParsed = JSON.parse(localStorageItem);
				}
				setItem(itemParsed);
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}, 1000);
	});
	const saveToDo = newToDos => {
		try {
			const stringiFiedToDo = JSON.stringify(newToDos);
			localStorage.setItem(itemName, stringiFiedToDo);
			setItem(newToDos);
		} catch (error) {
			setError(Error);
		}
	};
	return { item, loading, error, saveToDo };
}

function App() {
	const {
		item: tasks,
		loading,
		error,
		saveToDo,
	} = useLocalStorage('ToDo_V1', []);
	const [searchState, setSearchState] = useState('');
	let taskFound = [];
	const completedTasks = tasks.filter(task => !!task.state).length;
	const numberTasks = tasks.length;
	// const error = false;

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
			<TodoContainer
				completedTasks={completedTasks}
				numberTasks={numberTasks}
				taskFound={taskFound}
				loading={loading}
				error={error}
				completeToDo={completeToDo}
				deleteToDo={deleteToDo}
			/>
		</>
	);
}

export default App;
