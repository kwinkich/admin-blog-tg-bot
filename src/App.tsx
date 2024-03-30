import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNewsPage from './pages/CreateNews.page';
import CreatePostPage from './pages/CreatePost.page';
import MainPage from './pages/Main.page';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/create-post' element={<CreatePostPage />} />
					<Route path='/create-news' element={<CreateNewsPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
