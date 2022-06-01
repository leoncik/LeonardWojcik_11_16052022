import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './LocationCard.module.css';

const LocationCard = ({ cover, title, id }) => (
	<div
		className={classes['location-card']}
		style={{
			backgroundImage: `linear-gradient(      to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.3)), url(${cover})`,
		}}
	>
		<Link to={`/locations/${id}`}>
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
