// import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import Accordion from '../components/Accordion/Accordion';
import Carousel from '../components/Carousel/Carousel';
import Host from '../components/Host/Host';
import StarRate from '../components/StarRate';
import Tag from '../components/Tag/Tag';
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';
import Error404 from './Error404';
import classes from './LocationDetails.module.css';

const LocationDetails = () => {
	const { id } = useParams();
	const currentLocation = MOCKED_DATA.find((location) => location.id === id);

	// If the use of "styled-components library was allowed, this code would style the StarRate components"
	// const RatingContainer = styled.div`
	// 	> svg:nth-child(-n + ${currentLocation.rating}) > path {
	// 		fill: #ff6060;
	// 	}
	// `;

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
					<div className={classes['rating-container']}>
						<StarRate
							cssClassName={
								currentLocation.rating > 0 ? classes['rating-active'] : null
							}
						/>
						<StarRate
							cssClassName={
								currentLocation.rating > 1 ? classes['rating-active'] : null
							}
						/>
						<StarRate
							cssClassName={
								currentLocation.rating > 2 ? classes['rating-active'] : null
							}
						/>
						<StarRate
							cssClassName={
								currentLocation.rating > 3 ? classes['rating-active'] : null
							}
						/>
						<StarRate
							cssClassName={
								currentLocation.rating > 4 ? classes['rating-active'] : null
							}
						/>
					</div>
				</div>
			</section>
			<section className={classes['location-secondary-info']}>
				<div className="location-description">
					<dl className="accordion-group">
						<Accordion
							title="Description"
							content={currentLocation.description}
						/>
					</dl>
				</div>
				<div className="location-equipments">
					<dl className="accordion-group">
						<Accordion
							title="Équipements"
							content={currentLocation.equipments}
						/>
					</dl>
				</div>
			</section>
		</main>
	) : (
		<Error404 />
	);
};

export default LocationDetails;
