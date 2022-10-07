import { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import PropTypes from 'prop-types';

const ToDoContext = createContext();

function ToDoProvider(props) {
	const {
		item: tasks,
		loading,
		error,
		saveToDo,
	} = useLocalStorage('ToDo_V1', []);
	const [searchState, setSearchState] = useState('');
	const [openModal, setOpenModal] = useState(false);
	let taskFound = [];
	const completedTasks = tasks.filter(task => !!task.state).length;
	const numberTasks = tasks.length;
	// const error = false;

	const addToDo = text => {
		const newToDos = [...tasks];
		newToDos.push({
			text,
			state: false,
		});
		saveToDo(newToDos);
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
		<ToDoContext.Provider
			value={{
				searchState,
				setSearchState,
				completedTasks,
				numberTasks,
				loading,
				error,
				taskFound,
				addToDo,
				completeToDo,
				deleteToDo,
				openModal,
				setOpenModal,
			}}
		>
			{props.children}
		</ToDoContext.Provider>
	);
}

export { ToDoContext, ToDoProvider };

ToDoProvider.propTypes = {
	children: PropTypes.element,
};
