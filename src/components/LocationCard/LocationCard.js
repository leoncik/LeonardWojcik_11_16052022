import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './LocationCard.module.css';

const LocationCard = ({ cover, title, id }) => (
	<div className={classes['location-card']}>
		<Link to={`/locations/${id}`}>
			<img src={cover} alt="Photo de la location" />
			<h2>{title}</h2>
		</Link>
	</div>
);

export default LocationCard;

LocationCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	id: PropTypes.string,
};
