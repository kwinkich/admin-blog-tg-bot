import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button/Button.component';
import { NewsCard } from '../components/NewsCard/NewsCard.component';
import { PostCard } from '../components/PostCard/PostCard.component';
import useTelegram from '../hooks/useTelegram.ts';
import { News } from '../types/News';
import { Post } from '../types/Post';
import { UserData } from '../types/UserData';

export default function MainPage() {
	const { tg } = useTelegram();
	const [userData, setUserData] = useState<UserData>();
	const [postData, setPostData] = useState<Post[]>([]);
	const [newsData, setNewsData] = useState<News[]>([]);

	useEffect(() => {
		tg.ready();

		const fetchInitData = async () => {
			try {
				const response = await axios.post(
					'https://blog-server-oerc.onrender.com/api/bot/verify',
					{
						initData: tg.initDataUnsafe,
						tg,
					}
				);
				setUserData(response.data);
			} catch (err) {
				console.error(err);
			}
		};

		const fetchData = async () => {
			try {
				const dataPost = await axios.get(
					'https://blog-server-oerc.onrender.com/api/posts'
				);
				const dataNews = await axios.get(
					'https://blog-server-oerc.onrender.com/api/news'
				);

				setPostData(dataPost.data);
				setNewsData(dataNews.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchInitData();
		fetchData();
	}, [tg]);

	return (
		<div className='container text-center'>
			<div className='text-color text-2xl mb-10 mt-15'>AdminPanel</div>
			<div className='block-center flex flex-col max-w-max'>
				<div className='mb-20'>
					<h2 className='text-color text-xl mb-5'>
						Posts {userData?.user?.username}
					</h2>
					{postData.length !== 0 ? (
						postData.map((post) => {
							return (
								<div className='block-center max-w-max'>
									<PostCard key={post._id} data={post} />
								</div>
							);
						})
					) : (
						<>
							<h2 className='text-color text-xl mb-10'>No post yet</h2>
						</>
					)}
					<Link to={`/post/create`}>
						<Button>Create Post</Button>
					</Link>
				</div>
				<div>
					<h2 className='text-color text-xl mb-5'>News</h2>
					{newsData.length !== 0 ? (
						newsData.map((news) => {
							return (
								<div className='block-center max-w-max'>
									<NewsCard key={news._id} data={news} />
								</div>
							);
						})
					) : (
						<>
							<h2 className='text-color text-xl mb-10'>No news yet</h2>
						</>
					)}
					<Link to={`/news/create`}>
						<Button>Create News</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
