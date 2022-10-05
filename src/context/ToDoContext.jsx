import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = createContext();

function ToDoProvider(props) {
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
		<ToDoContext.Provider
			value={{
				searchState,
				setSearchState,
				completedTasks,
				numberTasks,
				taskFound,
				loading,
				error,
				completeToDo,
				deleteToDo,
			}}
		>
			{props.children}
		</ToDoContext.Provider>
	);
}

export { ToDoProvider, ToDoContext };

ToDoProvider.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
};
