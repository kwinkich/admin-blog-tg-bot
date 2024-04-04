import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from './contexts/VerifyContext';
import useTelegram from './hooks/useTelegram';
import CreateNewsPage from './pages/CreateNews.page';
import CreatePostPage from './pages/CreatePost.page';
import EditNewsPage from './pages/EditNews.page';
import EditPostPage from './pages/EditPost.page';
import MainPage from './pages/Main.page';

function App() {
	const { tg } = useTelegram();
	const { isVerify, userData, login } = useAuth();

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
				login(response.data);
			} catch (err) {
				tg.showAlert(`Oops.... ${err}`, () => err);
			}
		};

		fetchInitData();
	}, [tg, userData, login]);

	return (
		<>
			{isVerify ? (
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/post/create' element={<CreatePostPage />} />
						<Route path='/news/create' element={<CreateNewsPage />} />
						<Route path='/posts/edit/:id' element={<EditPostPage />} />
						<Route path='/news/edit/:id' element={<EditNewsPage />} />
					</Routes>
				</BrowserRouter>
			) : (
				<h1 className='text-3xl text-red-600'>Stop!</h1>
			)}
		</>
	);
}

export default App;
