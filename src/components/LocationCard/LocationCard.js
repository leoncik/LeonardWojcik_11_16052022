import PropTypes from 'prop-types';

const LocationCard = ({ cover, title }) => (
	<div className="location-card" style={{ background: `url(${cover})` }}>
		<h2>{title}</h2>
	</div>
);

export default LocationCard;

LocationCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
};
