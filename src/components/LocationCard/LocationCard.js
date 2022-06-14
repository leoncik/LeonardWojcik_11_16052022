import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './LocationCard.module.css';

const LocationCard = ({ cover, title, id }) => (
	<Link to={`/locations/${id}`} className={classes['location-card']}>
		<img src={cover} alt="Photo de la location" />
		<h2>{title}</h2>
	</Link>
);

export default LocationCard;

LocationCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	id: PropTypes.string,
};
