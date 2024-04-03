import axios from 'axios';
import { Link } from 'react-router-dom';
import { News } from '../../types/News';
import { ButtonDel } from '../ButtonDel/ButtonDel';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';

export const NewsCard = ({ data }: { data: News }) => {
	const handleClickDelNews = async () => {
		try {
			const response = await axios.delete(
				`https://blog-server-oerc.onrender.com/api/news/delete/${data._id}`
			);
			console.log(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='flex flex-col text-center border-card max-w-max items-center'>
			<h1 className='text-color mb-5 text-xl'>{data.title}</h1>
			<div className='flex gap-7 items-center'>
				<ButtonDel click={handleClickDelNews} />
				<Link to={`/news/edit/${data._id}`}>
					<ButtonEdit />
				</Link>
			</div>
		</div>
	);
};
