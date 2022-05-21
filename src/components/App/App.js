import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/Home';
import AboutPage from '../../pages/About';
import MainNavigation from '../layout/MainNavigation/MainNavigation';
import Footer from '../layout/Footer/Footer';
import Error404 from '../../pages/Error404';

function App() {
	return (
		<div className="App">
			<MainNavigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/a-propos" element={<AboutPage />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
