export function CreateTodoButton({ setOpenModal }) {
	const createTask = () => setOpenModal(true);
	return (
		<button
			className='fixed md:absolute right-4 md:right-9 bottom-4 block w-14 h-14 bg-blue-400 rounded-lg text-5xl text-center text-white hover:bg-blue-700'
			onClick={createTask}
		>
			+
		</button>
	);
}