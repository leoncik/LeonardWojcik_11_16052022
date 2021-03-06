import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/Home/Home';
import AboutPage from '../../pages/About/About';
import MainNavigation from '../layout/MainNavigation/MainNavigation';
import Footer from '../layout/Footer/Footer';
import Error404 from '../../pages/Error404/Error404';
import LocationDetails from '../../pages/LocationDetails/LocationDetails';

function App() {
	return (
		<div className="App">
			<MainNavigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/a-propos" element={<AboutPage />} />
				<Route path="/locations/:id" element={<LocationDetails />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
