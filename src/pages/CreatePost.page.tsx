import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button.component';
import { Input } from '../components/Input/Input.component';
import { Label } from '../components/Label/Label.component';

export default function CreatePostPage() {
	const [postTitle, setTitle] = useState<string>('');
	const [postDescription, setDescription] = useState<string>('');
	const [postTags, setTags] = useState<string>('');

	const navigate = useNavigate();

	const handleCreatePost = async () => {
		try {
			const createdPost = await axios.post(
				'https://blog-server-ruvh.onrender.com/api/posts/create',
				{
					title: postTitle,
					description: postDescription,
					tags: postTags,
				}
			);
			console.log(createdPost);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container text-center'>
			<div className='max-w-max block-center'>
				<h1 className='text-2xl mb-20 text-color'>Create Post</h1>
				<div className='flex flex-col items-start max-w-max block-center'>
					<div className='mb-10 flex items-center gap-7'>
						<Label>Post Title</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTitle(e.target.value)
							}
							placeholder='Title'
						/>
					</div>
					<div className='mb-10 flex items-center gap-7'>
						<Label>Post Description</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDescription(e.target.value)
							}
							placeholder='Description'
						/>
					</div>
					<div className='mb-10 flex items-center gap-7'>
						<Label>Post Tags</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTags(e.target.value)
							}
							placeholder='Tags'
						/>
					</div>
					<Button click={handleCreatePost}>Create Post</Button>
				</div>
			</div>
		</div>
	);
}
