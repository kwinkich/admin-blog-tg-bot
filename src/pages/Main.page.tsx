import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button/Button.component';
import { NewsCard } from '../components/NewsCard/NewsCard.component';
import { PostCard } from '../components/PostCard/PostCard.component';
import { News } from '../types/News';
import { Post } from '../types/Post';

export default function MainPage() {
	const [postData, setPostData] = useState<Post[]>([]);
	const [newsData, setNewsData] = useState<News[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const dataPost = await axios.get(
					'https://blog-server-ruvh.onrender.com/api/posts'
				);
				const dataNews = await axios.get(
					'https://blog-server-ruvh.onrender.com/api/news'
				);

				setPostData(dataPost.data);
				setNewsData(dataNews.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	});

	return (
		<div className='container text-center'>
			<div className='text-color text-2xl mb-10'>AdminPanel</div>
			<div className='block-center flex flex-col max-w-max'>
				<div className='mb-20'>
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
				<div>
					<h2 className='text-color text-xl mb-5'>News</h2>
					{newsData.length !== 0 ? (
						newsData.map((news) => {
							return <NewsCard key={news._id} data={news} />;
						})
					) : (
						<>
							<h2 className='text-color text-xl mb-10'>No news yet</h2>
							<Button>Create News</Button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
