import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button.component';
import { Input } from '../components/Input/Input.component';
import { Label } from '../components/Label/Label.component';
import useTelegram from '../hooks/useTelegram';
import { Post } from '../types/Post';

export default function EditPostPage() {
	const { tg } = useTelegram();
	const [postData, setPostData] = useState<Post>();
	const [postTitle, setTitle] = useState<string>('');
	const [postDescription, setDescription] = useState<string>('');
	const [postTags, setTags] = useState<string>('');
	const { id } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dataPost = await axios.get(
					`https://blog-server-3xmv.onrender.com/api/posts/${id}`
				);
				setPostData(dataPost.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	});

	const handleEditPost = async () => {
		try {
			const editedPost = await axios.put(
				`https://blog-server-3xmv.onrender.com/api/posts/update/${id}`,
				{
					postData: {
						title: postTitle || postData?.title,
						description: postDescription || postData?.description,
						tags: postTags || postData?.tags,
					},
					initData: tg.initDataUnsafe,
				}
			);
			console.log(editedPost);
			return navigate('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container text-center'>
			<div className='max-w-max block-center'>
				<h1 className='text-2xl mb-20 text-color mt-15'>Edit Post</h1>
				<div className='flex flex-col items-center max-w-max block-center'>
					<div className='mb-10 flex flex-col items-start gap-7'>
						<Label>Post Title</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTitle(e.target.value)
							}
							placeholder='Title'
						/>
					</div>
					<div className='mb-10 flex flex-col items-start gap-7'>
						<Label>Post Description</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setDescription(e.target.value)
							}
							placeholder='Description'
						/>
					</div>
					<div className='mb-10 flex flex-col items-start gap-7'>
						<Label>Post Tags</Label>
						<Input
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setTags(e.target.value)
							}
							placeholder='Tags'
						/>
					</div>
					<Button click={handleEditPost}>Edit Post</Button>
				</div>
			</div>
		</div>
	);
}
