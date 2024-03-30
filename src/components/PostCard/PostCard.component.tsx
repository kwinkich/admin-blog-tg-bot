import axios from 'axios';
import { Post } from '../../types/Post';
import { ButtonDel } from '../ButtonDel/ButtonDel';

export const PostCard = ({ data }: { data: Post }) => {
	const handleClickDelPost = async () => {
		try {
			const response = await axios.delete(
				`https://blog-server-ruvh.onrender.com/api/posts/delete/${data._id}`
			);
			console.log(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='flex flex-col text-center border-card max-w-max items-center'>
			<h1 className='text-color mb-5 text-xl'>{data.title}</h1>
			<div className='flex items-center mb-10'>
				{data.tags.map((tag) => {
					return (
						<span key={tag} className='tag-text'>
							{tag}
						</span>
					);
				})}
			</div>
			<ButtonDel click={handleClickDelPost} />
		</div>
	);
};
