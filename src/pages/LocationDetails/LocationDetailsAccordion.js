import Accordion from '../../components/Accordion/Accordion';
import PropTypes from 'prop-types';

const LocationDetailsAccordion = ({ title, content }) => {
	return (
		<div
			className={
				title === 'Description' ? 'location-description' : 'location-equipments'
			}
		>
			<dl className="accordion-group">
				<Accordion title={title} content={content} />
			</dl>
		</div>
	);
};

export default LocationDetailsAccordion;

LocationDetailsAccordion.propTypes = {
	title: PropTypes.string,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
};
