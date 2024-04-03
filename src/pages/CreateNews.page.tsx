import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button.component';
import { Input } from '../components/Input/Input.component';
import { Label } from '../components/Label/Label.component';

export default function CreateNewsPage() {
	const [newsTitle, setTitle] = useState<string>('');
	const [newsDescription, setDescription] = useState<string>('');

	const navigate = useNavigate();

	const handleCreateNews = async () => {
		try {
			const createdNews = await axios.post(
				'https://blog-server-oerc.onrender.com/api/news/create',
				{
					title: newsTitle,
					description: newsDescription,
				}
			);
			console.log(createdNews);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container text-center'>
			<div className='max-w-max block-center'>
				<h1 className='text-2xl mb-20 text-color mt-15'>Create News</h1>
				<div className='flex flex-col items-center max-w-max block-center'>
					<div className='mb-10 flex flex-col items-start  gap-7'>
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
					<Button click={handleCreateNews}>Create News</Button>
				</div>
			</div>
		</div>
	);
}
