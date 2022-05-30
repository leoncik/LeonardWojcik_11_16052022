import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import classes from './Carousel.module.css';
import NextImage from './NextImage';
import PreviousImage from './PreviousImage';

let counter = 0;

const Carousel = ({ images }) => {
	const totalOfImages = images.length;
	let shifting = 0;

	const carousel = useRef();
	let carouselItemWidth = 0;

	let carouselTrack = useRef();

	const [imageNumber, setImageNumber] = useState(1);

	// Todo : wait end of animation before clicking again. Maybe with a condition like : "animationPlayState == 'paused'" ?
	// Todo : fix "setImageNumber" value when going backward.
	// Todo : reset values when leaving page.

	// Todo : improve responsivity (may require HTML changes).
	// https://stackoverflow.com/questions/37891839/keep-one-element-centered-between-two-elements-of-different-widths-in-flexbox

	const handleNextImage = () => {
		carouselItemWidth = carousel.current.getBoundingClientRect().width;
		counter++;
		setImageNumber(imageNumber + 1);
		shifting = counter * carouselItemWidth;
		carouselTrack.current.style.transition = '800ms linear';
		carouselTrack.current.style.transform = `translateX(-${shifting}px)`;
		if (counter === totalOfImages) {
			setImageNumber(1);
		}
		if (counter > totalOfImages) {
			carouselItemWidth = carousel.current.getBoundingClientRect().width;
			counter = 0;
			carouselTrack.current.style.transition = 'unset';
			carouselTrack.current.style.transform = `translateX(0)`;
			// Add setTimeout to prevent animation conflict
			setTimeout(handleNextImage, 1);
		}
	};

	const handlePreviousImage = () => {
		if (counter >= 0) {
			carouselItemWidth = carousel.current.getBoundingClientRect().width;
			counter--;
			setImageNumber(imageNumber - 1);
			console.log(imageNumber);
			shifting = -counter * carouselItemWidth;
			carouselTrack.current.style.transition = '800ms linear';
			carouselTrack.current.style.transform = `translateX(${shifting}px)`;
		}
		if (counter < 0) {
			carouselItemWidth = carousel.current.getBoundingClientRect().width;
			counter = totalOfImages;
			setImageNumber(totalOfImages);
			shifting = -counter * carouselItemWidth;
			carouselTrack.current.style.transition = 'unset';
			carouselTrack.current.style.transform = `translateX(${shifting}px)`;
			// Add setTimeout to prevent animation conflict
			setTimeout(handlePreviousImage, 1);
		}
	};

	return (
		<div ref={carousel} className={classes['location-carousel']}>
			<div ref={carouselTrack} className={classes['carousel-track']}>
				{images.map((image, index) => (
					<div key={index} className={classes['carousel-item']}>
						<img src={image} />
					</div>
				))}
				{/* Duplicate first image at the end in order to manage infinite animation */}
				{images.length > 1 ? (
					<div className={classes['carousel-item']}>
						<img src={images[0]} />
					</div>
				) : null}
			</div>
			<div className="carousel-controls">
				<div>
					<span
						onClick={handlePreviousImage}
						className={classes['previous-image']}
					>
						<PreviousImage />
					</span>
					<span onClick={handleNextImage} className={classes['next-image']}>
						<NextImage />
					</span>
				</div>
				<div className={classes['image-position']}>
					<span>
						{imageNumber} / {totalOfImages}{' '}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string),
};
