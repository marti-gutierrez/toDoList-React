import withStorageListener from './withStorageListener';
import { AiOutlineWarning, AiOutlineReload } from 'react-icons/ai';
import PropTypes from 'prop-types';

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div className='z-10 fixed  top-0 bottom-0 left-0 right-0 grid place-items-center bg-modal '>
				<div>
					<p className='text-center text-amber-500'>
						Hubo Cambios
						<AiOutlineWarning className='inline-block w-6 h-6 ml-2 pb-1' />
					</p>
					<button
						onClick={() => toggleShow(false)}
						className='bg-amber-500 mt-4 px-6 py-3 font-bold rounded-md flex gap-4 items-center'
					>
						Volver a cargar ToDos
						<AiOutlineReload className='w-6 h-6' />
					</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };

ChangeAlert.propTypes = {
	show: PropTypes.bool,
	toggleShow: PropTypes.func,
};
