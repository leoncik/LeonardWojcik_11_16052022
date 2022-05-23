import PropTypes from 'prop-types';
import classes from './Carousel.module.css';

const Carousel = (props) => {
	return (
		<div className={classes['location-carousel']}>
			<img src={props.images[0]}></img>
		</div>
	);
};

export default Carousel;

Carousel.propTypes = {
	images: PropTypes.string,
};
