import { Post } from '../../types/Post';
import './PostCard.css';

export const PostCard = ({ data }: { data: Post }) => {
	return (
		<div className='flex flex-col'>
			<h1 className='text-color mb-5'>{data.title}</h1>
			<div className='flex items-center'>
				{data.tags.map((tag) => {
					return (
						<span key={tag} className='tag-text'>
							{tag}
						</span>
					);
				})}
			</div>
		</div>
	);
};
