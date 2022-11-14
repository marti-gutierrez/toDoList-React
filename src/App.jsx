import { useToDos } from './hooks/useToDos';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch.jsx';
import ResultNotFound from './components/ResultNotFound';
import { TodoList } from './container/TodoList.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { CreateTodoButton } from './components/CreateTodoButton.jsx';
import Modal from './container/Modal';
import ToDoForm from './components/ToDoForm';
import ToDoHeader from './container/ToDoHeader';
import ToDoMain from './container/ToDoMain';
import ToDoError from './components/ToDoError';
import ToDoLoading from './components/ToDoLoading';
import EmptyToDos from './components/EmptyToDos';
import ChangeAlert from './components/ChangeAlert';

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
		sincronizeToDo,
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
				<TodoList
					error={error}
					loading={loading}
					numberTasks={numberTasks}
					taskFound={taskFound}
					searchText={searchState}
					onError={() => <ToDoError />}
					onLoading={() => <ToDoLoading />}
					onEmptyToDo={() => <EmptyToDos />}
					onEmptySearchResult={searchText => (
						<ResultNotFound word={searchText} />
					)}
				>
					{(task, index) => (
						<TodoItem
							text={task.text}
							state={task.state}
							key={index}
							onComplete={() => completeToDo(index)}
							onDelete={() => deleteToDo(index)}
						/>
					)}
				</TodoList>
				{!!openModal && (
					<Modal>
						<ToDoForm setOpenModal={setOpenModal} addToDo={addToDo} />
					</Modal>
				)}
				<CreateTodoButton setOpenModal={setOpenModal} />
				<ChangeAlert sincronize={sincronizeToDo} />
			</ToDoMain>
		</>
	);
}

export default App;
