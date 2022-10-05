import { TodoContainer } from './containers/TodoContainer';
import { TodoSearch } from './components/TodoSearch';
import { ToDoProvider } from './context/ToDoContext';

function App() {
	return (
		<ToDoProvider>
			<TodoSearch />
			<TodoContainer />
		</ToDoProvider>
	);
}

export default App;
