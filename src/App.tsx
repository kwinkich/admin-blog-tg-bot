import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePostPage from './pages/CreatePost.page';
import MainPage from './pages/Main.page';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/create-post' element={<CreatePostPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
