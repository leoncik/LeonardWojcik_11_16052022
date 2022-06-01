import LocationCard from '../../components/LocationCard/LocationCard';
import MainBanner from '../../components/MainBanner/MainBanner';
import homeBanner from '../../assets/images/home-banner.jpg';
import classes from './Home.module.css';

import { MOCKED_DATA } from '../../helpers/MOCKED_DATA';

// Todo: if desktop version, set title to : "Chez vous, partout et ailleurs", else : "Chez vous,<br/> partout et ailleurs"

const HomePage = () => {
	return (
		<main>
			<MainBanner
				title="Chez vous, partout et ailleurs"
				background={homeBanner}
			/>
			<section className={classes['location-cards']}>
				{MOCKED_DATA.map((elt) => (
					<LocationCard
						key={elt.id}
						title={elt.title}
						cover={elt.cover}
						id={elt.id}
					/>
				))}
			</section>
		</main>
	);
};

export default HomePage;
