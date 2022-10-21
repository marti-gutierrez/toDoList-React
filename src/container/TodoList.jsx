import PropTypes from 'prop-types';

export function TodoList({
	error,
	loading,
	numberTasks,
	taskFound,
	onError,
	onLoading,
	onEmptyToDo,
	render,
	onEmptySearchResult,
	searchText,
	children,
}) {
	const renderFunc = children || render;
	return (
		<section>
			{error && onError()}
			{loading && onLoading()}
			{!loading && !numberTasks && onEmptyToDo()}
			{numberTasks && !taskFound.length && onEmptySearchResult(searchText)}
			<ul className='grid gap-4 w-11/12 mx-auto my-7'>
				{taskFound.map(renderFunc)}
			</ul>
		</section>
	);
}

TodoList.propTypes = {
	numberTasks: PropTypes.number,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	children: PropTypes.func,
	taskFound: PropTypes.arrayOf(PropTypes.object),
	onError: PropTypes.func,
	onLoading: PropTypes.func,
	onEmptyToDo: PropTypes.func,
	render: PropTypes.func,
};
