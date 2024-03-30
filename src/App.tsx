import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNewsPage from './pages/CreateNews.page';
import CreatePostPage from './pages/CreatePost.page';
import EditNewsPage from './pages/EditNews.page';
import EditPostPage from './pages/EditPost.page';
import MainPage from './pages/Main.page';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/post/create' element={<CreatePostPage />} />
					<Route path='/news/create' element={<CreateNewsPage />} />
					<Route path='/posts/edit/:id' element={<EditPostPage />} />
					<Route path='/news/edit/:id' element={<EditNewsPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
