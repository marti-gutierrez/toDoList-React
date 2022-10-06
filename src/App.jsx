import AppUI from './container/AppUI';
import { ToDoProvider } from './context/ToDoContext';

function App() {
	return (
		<ToDoProvider>
			<AppUI />
		</ToDoProvider>
	);
}

export default App;
