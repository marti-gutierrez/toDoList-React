import { useToDos } from './hooks/useToDos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoList } from './container/TodoList.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { CreateTodoButton } from './components/CreateTodoButton.jsx';
import Modal from './container/Modal';
import ToDoForm from './components/ToDoForm';
import ToDoHeader from './container/ToDoHeader';
import ToDoMain from './container/ToDoMain';

function App() {
	const {
		taskFound,
		loading,
		error,
		completeToDo,
		deleteToDo,
		openModal,
		completedTasks,
		numberTasks,
		searchState,
		setSearchState,
		setOpenModal,
		addToDo,
	} = useToDos();
	return (
		<>
			<ToDoHeader>
				<TodoSearch searchState={searchState} setSearchState={setSearchState} />
			</ToDoHeader>
			<ToDoMain>
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
				{!!openModal && (
					<Modal>
						<ToDoForm setOpenModal={setOpenModal} addToDo={addToDo}/>
					</Modal>
				)}
				<CreateTodoButton setOpenModal={setOpenModal} />
			</ToDoMain>
		</>
	);
}

export default App;
