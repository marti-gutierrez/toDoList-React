import { FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export default function ToDoForm() {
	const [newTaskValue, setNewTaskValue] = useState('');
	const { setOpenModal, addToDo } = useContext(ToDoContext);
	const onCloseModal = () => setOpenModal(false);
	const onWriteChange = event => setNewTaskValue(event.target.value);
	const onSubmit = event => {
		event.preventDefault();
		addToDo(newTaskValue);
    onCloseModal();
	};
	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 flex bg-modal'>
			<div className='bg-slate-100 w-11/12 max-h-80 max-w-xl m-auto overflow-hidden py-4 px-4 rounded-md'>
				<section className='flex justify-between items-center pb-1 border-b-4'>
					<h2 className='font-bold text-lg text-slate-700'>Create Task</h2>
					<button
						className='w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500'
						onClick={onCloseModal}
					>
						<FaTimes />
					</button>
				</section>
				<form
					className='grid w-full grid-rows-[repeat(3,50px)] grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-2 mt-4'
					onSubmit={onSubmit}
				>
					<textarea
						rows={4}
						cols={37}
						maxLength={100}
						minLength={3}
						value={newTaskValue}
						onChange={onWriteChange}
						placeholder='pagar el alimento del michi ...'
						className='col-span-full row-start-1 row-end-3 bg-transparent border-none outline-none resize-none px-2'
					></textarea>
					<button type='button' onClick={onCloseModal} className="col-start-[-3] col-end-[-2] row-start-3 row-end-4 border-2 border-slate-300 rounded-lg text-slate-400">
						Cancel
					</button>
					<button
						type='submit'
						className='col-start-[-2] col-end-[-1] row-start-3 row-end-4 md:justify-self-end self-center w-full h-full bg-blue-400 text-slate-100 rounded-lg'
					>
						Create
					</button>
				</form>
			</div>
		</div>
	);
}
