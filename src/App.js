import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';

function App() {
	return (
		<div className="App">
			<MainNavigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/a-propos" element={<AboutPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
