import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
	const [sincronizedItem, setSincronizedItem] = useState(true);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [item, setItem] = useState(initialValue);
	useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let itemParsed;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					itemParsed = initialValue;
				} else {
					itemParsed = JSON.parse(localStorageItem);
				}
				setItem(itemParsed);
				setLoading(false);
				setSincronizedItem(true);
			} catch (error) {
				setError(error);
			}
		}, 1000);
	}, [sincronizedItem]);
	const saveToDo = newToDos => {
		try {
			const stringiFiedToDo = JSON.stringify(newToDos);
			localStorage.setItem(itemName, stringiFiedToDo);
			setItem(newToDos);
		} catch (error) {
			setError(Error);
		}
	};
	const sincronizeTask = () => {
		setLoading(true);
		setSincronizedItem(false);
	};
	return { item, loading, error, saveToDo, sincronizeTask };
}
