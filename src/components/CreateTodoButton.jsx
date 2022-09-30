export function CreateTodoButton() {
	const createTask = () => alert('Abriendo modal para nueva tarea');
	return (
		<button className='fixed right-4 bottom-4 block w-14 h-14 bg-blue-400 rounded-lg text-5xl text-center text-white hover:bg-blue-700' onClick={createTask}>
			+
		</button>
	);
}
