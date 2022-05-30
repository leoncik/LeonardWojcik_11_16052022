import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import classes from './Carousel.module.css';
import NextImage from './NextImage';
import PreviousImage from './PreviousImage';

let counter = 1;

const Carousel = ({ images }) => {
	const totalOfImages = images.length;
	let shifting = 0;

	const carousel = useRef();
	// ! Not working, use mock value temporarily
	// let carouselItemWidth = carousel.getBoundingClientRect.width;
	let carouselItemWidth = 1166;

	// const carouselTrack = document.querySelector('.carousel-track');
	let carouselTrack = useRef();

	const [imageNumber, setImageNumber] = useState(1);

	const handleNextImage = () => {
		setImageNumber(imageNumber + 1);
		shifting = counter * carouselItemWidth;
		carouselTrack.style.transition = '1s linear';
		carouselTrack.style.transform = `translateX(-${shifting}px)`;
		counter++;
		if (counter > totalOfImages + 1) {
			counter = 1;
			carouselTrack.style.transition = 'unset';
			carouselTrack.style.transform = `translateX(0)`;
			setImageNumber(1);
			// handleNextImage();
			// Could be fixed with a setTimeout of 1ms
			// ! Uncaught TypeError: carouselTrack is null.
			// setTimeout(handleNextImage, 1);
		}
	};

	const handlePreviousImage = () => {
		setImageNumber(imageNumber - 1);
		shifting = counter * carouselItemWidth;
		carouselTrack.style.transition = '1s linear';
		carouselTrack.style.transform = `translateX(${shifting}px)`;
		counter--;
	};

	return (
		<div ref={carousel} className={classes['location-carousel']}>
			<div
				ref={(ref) => (carouselTrack = ref)}
				className={classes['carousel-track']}
			>
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
