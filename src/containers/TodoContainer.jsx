import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from './TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';

export function TodoContainer() {
	return (
		<div className='relative w-full h-5/6 bg-slate-100 rounded-t-2xl'>
			<TodoCounter />
			<TodoList />
			<CreateTodoButton />
		</div>
	);
}
