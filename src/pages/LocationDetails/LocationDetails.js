import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Host from '../../components/Host/Host';
import StarRate from './StarRate';
import Tag from '../../components/Tag/Tag';
import { MOCKED_DATA } from '../../helpers/MOCKED_DATA';
import Error404 from '../Error404/Error404';
import classes from './LocationDetails.module.css';
import LocationDetailsAccordion from './LocationDetailsAccordion';

const LocationDetails = () => {
	const { id } = useParams();
	const currentLocation = MOCKED_DATA.find((location) => location.id === id);
	const maximumRateValue = 5;
	const maximumRateArray = Array.from(Array(maximumRateValue).keys());

	return currentLocation ? (
		<main className={classes['location-details-main']}>
			<section className={classes['location-carousel']}>
				<Carousel images={currentLocation.pictures} />
			</section>

			<section className={classes['location-primary-info']}>
				<div className={classes['location-info']}>
					<h1>{currentLocation.title}</h1>
					<h2>{currentLocation.location}</h2>
					<ul className={classes['location-tags']}>
						{currentLocation.tags.map((tag, index) => (
							<Tag key={index} tag={tag} />
						))}
					</ul>
				</div>
				<div className={classes['host-info']}>
					<Host host={currentLocation.host} />
					<div className={classes['rating-container']}>
						{maximumRateArray.map((currentStar) => (
							<StarRate
								key={currentStar}
								cssClassName={
									parseInt(currentLocation.rating) > currentStar
										? classes['rating-active']
										: null
								}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={classes['location-secondary-info']}>
				<LocationDetailsAccordion
					title={'Description'}
					content={currentLocation.description}
				/>
				<LocationDetailsAccordion
					title={'Équipements'}
					content={currentLocation.equipments}
				/>
			</section>
		</main>
	) : (
		<Error404 />
	);
};

export default LocationDetails;
