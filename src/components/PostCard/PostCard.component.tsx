import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../../types/Post';
import { ButtonDel } from '../ButtonDel/ButtonDel';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';

export const PostCard = ({ data }: { data: Post }) => {
	const handleClickDelPost = async () => {
		try {
			const response = await axios.delete(
				`https://blog-server-oerc.onrender.com/api/posts/delete/${data._id}`
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
			<div className='flex gap-7 items-center'>
				<ButtonDel click={handleClickDelPost} />
				<Link to={`/posts/edit/${data._id}`}>
					<ButtonEdit />
				</Link>
			</div>
		</div>
	);
};
