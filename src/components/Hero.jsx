import { FaGithub } from 'react-icons/fa';
export default function Hero() {
	return (
		<header className='flex items-end justify-between w-full h-32 px-4 py-5'>
			<h1 className='text-2xl font-bold text-white'>To-do list</h1>
			<figure>
				<FaGithub className='w-8 h-8'/>
			</figure>
		</header>
	);
}
