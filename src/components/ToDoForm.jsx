import { FaTimes } from 'react-icons/fa';

export default function ToDoForm({setOpenModal}) {
	const onCloseModal = () => setOpenModal(false);
	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 flex bg-modal'>
			<div className='bg-slate-100 w-11/12 max-h-80 max-w-xl m-auto overflow-hidden py-4 px-4 rounded-md'>
				<section className='flex justify-between items-center pb-1 border-b-4'>
					<h2 className='font-bold text-lg'>Create Task</h2>
					<button
						className='w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center text-slate-500'
						onClick={onCloseModal}
					>
						<FaTimes />
					</button>
				</section>
				<form action='' className='grid w-full grid-rows-3 grid-cols-2'>
					<label htmlFor=''></label>
					<textarea
						placeholder='pagar el alimento del michi ...'
						className='col-span-2 row-span-3'
					></textarea>
					<button onClick={onCloseModal}>Cancel</button>
					<button
						type='submit'
						className='justify-self-end py-2 px-6 bg-blue-400 text-slate-100 rounded-lg'
					>
						Create
					</button>
				</form>
			</div>
		</div>
	);
}
