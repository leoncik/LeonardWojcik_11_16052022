import { useParams } from 'react-router-dom';
import Accordion from '../components/Accordion/Accordion';
import Carousel from '../components/Carousel/Carousel';
import Host from '../components/Host/Host';
import Tag from '../components/Tag/Tag';
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';
import Error404 from './Error404';
import classes from './LocationDetails.module.css';

const LocationDetails = () => {
	const { id } = useParams();
	const currentLocation = MOCKED_DATA.find((location) => location.id === id);

	return currentLocation ? (
		<main>
			<section className={classes['location-carousel']}>
				<Carousel images={currentLocation.pictures} />
			</section>
			<section className={classes['location-primary-info']}>
				<div className="location-info">
					<h1>{currentLocation.title}</h1>
					<h2>{currentLocation.location}</h2>
					<ul className={classes['location-tags']}>
						{currentLocation.tags.map((tag, index) => (
							<Tag key={index} tag={tag} />
						))}
					</ul>
				</div>
				<div className="host-info">
					<Host host={currentLocation.host} />
				</div>
			</section>
			<section className={classes['location-secondary-info']}>
				<div className="location-description">
					<Accordion
						title="Description"
						content={currentLocation.description}
					/>
				</div>
				<div className="location-equipments">
					<Accordion title="Équipements" content={currentLocation.equipments} />
				</div>
			</section>
			{console.log(currentLocation)}
		</main>
	) : (
		<Error404 />
	);
};

export default LocationDetails;
