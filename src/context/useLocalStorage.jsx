import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [item, setItem] = useState(initialValue);
	useEffect(() => {
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
		} catch (error) {
			setError(error);
		}
	}, []);
	const saveToDo = newToDos => {
		try {
			const stringiFiedToDo = JSON.stringify(newToDos);
			localStorage.setItem(itemName, stringiFiedToDo);
			setItem(newToDos);
		} catch (error) {
			setError(Error);
		}
	};
	return { item, loading, error, saveToDo };
}
