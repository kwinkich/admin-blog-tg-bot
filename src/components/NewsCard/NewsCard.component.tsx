import { News } from '../../types/News';

export const NewsCard = ({ data }: { data: News }) => {
	return (
		<div className='flex flex-col text-center border-card max-w-max items-center'>
			<h1 className='text-color mb-5 text-xl'>{data.title}</h1>
		</div>
	);
};
