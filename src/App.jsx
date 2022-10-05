import { useState} from 'react';
import {useLocalStorage} from './context/useLocalStorage'
import AppUI from './container/AppUI';

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
		<AppUI
			searchText={searchState}
			setSearchState={setSearchState}
			completedTasks={completedTasks}
			numberTasks={numberTasks}
			loading={loading}
			error={error}
			taskFound={taskFound}
			completeToDo={completeToDo}
			deleteToDo={deleteToDo}
		/>
	);
}

export default App;
