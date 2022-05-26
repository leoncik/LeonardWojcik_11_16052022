import PropTypes from 'prop-types';
import classes from './Carousel.module.css';
import NextImage from './NextImage';
import PreviousImage from './PreviousImage';

const Carousel = (props) => {
	return (
		<div className={classes['location-carousel']}>
			<div className={classes['carousel-track']}>
				<div className="carousel-item">
					<img src={props.images[0]}></img>
				</div>
			</div>
			<div className="carousel-controls">
				<div>
					<span className="previous-image">
						<PreviousImage />
					</span>
					<span className="next-image">
						<NextImage />
					</span>
				</div>
				<div className={classes['image-position']}>
					<span>1/5</span>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

Carousel.propTypes = {
	images: PropTypes.string,
};
