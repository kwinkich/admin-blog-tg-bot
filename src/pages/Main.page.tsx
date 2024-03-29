import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { PostCard } from '../components/postCard/PostCard.components';
import { Post } from '../types/Post';

export default function MainPage() {
	const [postData, setPostData] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await axios.get(
				'https://blog-server-ruvh.onrender.com/api/posts'
			);
			setPostData(data.data);
		};

		fetchData();
	});

	return (
		<div className='container text-center'>
			<div className='text-color text-2xl mb-10'>AdminPanel</div>
			<div className='max-w-max block-center flex flex-col'>
				<h2 className='text-color text-xl mb-5'>Posts</h2>
				{postData.length !== 0 ? (
					postData.map((post) => {
						return <PostCard key={post._id} data={post} />;
					})
				) : (
					<>
						<h2 className='text-color text-xl mb-10'>No post yet</h2>
						<Button>Create Post</Button>
					</>
				)}
			</div>
		</div>
	);
}
