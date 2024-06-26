import axios from 'axios';
import { Link } from 'react-router-dom';
import useTelegram from '../../hooks/useTelegram';
import { Post } from '../../types/Post';
import { ButtonDel } from '../ButtonDel/ButtonDel';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';

export const PostCard = ({ data }: { data: Post }) => {
	const { tg } = useTelegram();
	const handleClickDelPost = async () => {
		try {
			const response = await axios.post(
				`https://blog-server-3xmv.onrender.com/api/posts/delete/${data._id}`,
				{
					initData: tg.initDataUnsafe,
				}
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
