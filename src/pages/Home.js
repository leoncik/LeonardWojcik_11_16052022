import LocationCard from '../components/LocationCard/LocationCard';
import MainBanner from '../components/MainBanner/MainBanner';

import { MOCKED_DATA } from '../helpers/MOCKED_DATA';

const HomePage = () => {
	return (
		<div>
			<MainBanner />
			<section className="location-cards">
				{MOCKED_DATA.map((elt) => (
					<LocationCard key={elt.id} title={elt.title} cover={elt.cover} />
				))}
			</section>
		</div>
	);
};

export default HomePage;
