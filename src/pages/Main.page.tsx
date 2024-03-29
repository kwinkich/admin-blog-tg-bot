import axios from 'axios';
import { useEffect, useState } from 'react';
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
			<div className='text-color text-2xl'>AdminPanel</div>
			<div className='max-w-max block-center flex flex-col'>
				{postData.length !== 0 &&
					postData.map((post) => {
						return <PostCard key={post._id} data={post} />;
					})}
			</div>
		</div>
	);
}
