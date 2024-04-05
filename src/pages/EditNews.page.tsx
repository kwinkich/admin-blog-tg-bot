import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button.component';
import { Input } from '../components/Input/Input.component';
import { Label } from '../components/Label/Label.component';
import useTelegram from '../hooks/useTelegram';
import { News } from '../types/News';

export default function EditNewsPage() {
	const { tg } = useTelegram();
	const [newsData, setNewsData] = useState<News>();
	const [newsTitle, setTitle] = useState<string>('');
	const [newsDescription, setDescription] = useState<string>('');
	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dataPost = await axios.get(
					`https://blog-server-3xmv.onrender.com/api/news/${id}`
				);
				setNewsData(dataPost.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	});

	const handleEditNews = async () => {
		try {
			const editedNews = await axios.put(
				`https://blog-server-3xmv.onrender.com/api/news/update/${id}`,
				{
					newsData: {
						title: newsTitle || newsData?.title,
						description: newsDescription || newsData?.description,
					},
					initData: tg.initDataUnsafe,
				}
			);
			console.log(editedNews);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container text-center'>
			<div className='max-w-max block-center'>
				<h1 className='text-2xl mb-20 text-color mt-15'>Edit News</h1>
				<div className='flex flex-col items-center max-w-max block-center'>
					<div className='mb-10 flex flex-col items-start gap-7'>
						<Label>News Title</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTitle(e.target.value)
							}
							placeholder='Title'
						/>
					</div>
					<div className='mb-10 flex flex-col items-start gap-7'>
						<Label>News Description</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDescription(e.target.value)
							}
							placeholder='Description'
						/>
					</div>
					<Button click={handleEditNews}>Edit News</Button>
				</div>
			</div>
		</div>
	);
}
