import { useState } from 'react';

export default function useStorageListener(sincronize) {
	const [storageChange, setStorageChange] = useState(false);
	window.addEventListener('storage', change => {
		if (change.key === 'ToDo_V1') {
			console.log('Hubo cambios en ToDo_V1');
			setStorageChange(true);
		}
	});
	const toggleShow = () => {
		sincronize();
		setStorageChange(false);
	};
	return {
		show: storageChange,
		toggleShow,
	};
}
