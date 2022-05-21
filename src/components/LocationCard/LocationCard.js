import PropTypes from 'prop-types';
import classes from './LocationCard.module.css';

const LocationCard = ({ cover, title }) => (
	<div
		className={classes['location-card']}
		style={{ backgroundImage: `url(${cover})` }}
	>
		<h2>{title}</h2>
	</div>
);

export default LocationCard;

LocationCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
};
