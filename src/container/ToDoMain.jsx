import PropTypes from 'prop-types';

export default function ToDoMain({children}) {
	return (
		<main className='relative w-full max-w-4xl h-5/6 md:h-max mx-auto bg-slate-100 rounded-t-2xl md:rounded-2xl md:pb-20'>
      {children}
    </main>
	);
}

ToDoMain.propTypes = {
  children: PropTypes.node
}