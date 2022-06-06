import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import classes from './Carousel.module.css';
import NextImage from './NextImage';
import PreviousImage from './PreviousImage';

let counter = 0;
const Carousel = ({ images }) => {
	const totalOfImages = images.length;

	const carousel = useRef();

	let carouselTrack = useRef();

	let carouselItems;

	const [imageNumber, setImageNumber] = useState(1);

	const [animate, setAnimate] = useState(true);
	const animationDuration = 800;

	const handleNextImage = () => {
		if (animate === true) {
			setAnimate(false);
			if (imageNumber === totalOfImages) {
				setImageNumber(1);
			} else {
				setImageNumber(imageNumber + 1);
			}
			counter++;
			// Select all carousel items
			carouselItems = carouselTrack.current.children;
			for (let i = carouselItems.length; i--; ) {
				carouselItems[i].style.left = `${(i - 2) * 100}%`;
				carouselItems[
					i
				].style.transition = `${animationDuration}ms linear left`;
				// Wait end of animation before enabling click again.
				setTimeout(() => {
					setAnimate(true);
				}, animationDuration);
			}
			// Remove first child of carouselTrack
			carouselTrack.current.removeChild(carouselTrack.current.firstChild);
			// Create a new carousel item at the end of carouselTrack
			const newCarouselItem = document.createElement('li');
			newCarouselItem.className = classes['carousel-item'];
			const newCarouselItemImage = document.createElement('img');
			// Set src according to imageNumber
			if (counter === totalOfImages - 1) {
				newCarouselItemImage.src = images[0];
				counter = -1;
			} else {
				newCarouselItemImage.src = images[counter + 1];
			}
			newCarouselItem.appendChild(newCarouselItemImage);
			newCarouselItem.style.left = `${(carouselItems.length - 1) * 100}%`;
			newCarouselItem.style.transition = `${animationDuration}ms linear left`;
			carouselTrack.current.appendChild(newCarouselItem);
		}
	};

	const handlePreviousImage = () => {
		if (animate === true) {
			console.log(counter);
			setAnimate(false);
			if (imageNumber === 1) {
				setImageNumber(totalOfImages);
			} else {
				setImageNumber(imageNumber - 1);
			}
			counter--;
			// Select all carousel items
			carouselItems = carouselTrack.current.children;
			for (let i = carouselItems.length; i--; ) {
				carouselItems[i].style.left = `${i * 100}%`;
				carouselItems[
					i
				].style.transition = `${animationDuration}ms linear left`;
				// Wait end of animation before enabling click again.
				setTimeout(() => {
					setAnimate(true);
				}, animationDuration);
			}
			// Remove last child of carouselTrack
			carouselTrack.current.removeChild(carouselTrack.current.lastChild);
			// Create a new carousel item at the beginning of carouselTrack
			const newCarouselItem = document.createElement('li');
			newCarouselItem.className = classes['carousel-item'];
			const newCarouselItemImage = document.createElement('img');
			// Set src according to imageNumber
			if (counter === -1) {
				newCarouselItemImage.src = images[totalOfImages - 2];
				counter = totalOfImages - 1;
			} else if (counter === 0) {
				newCarouselItemImage.src = images[totalOfImages - 1];
			} else {
				newCarouselItemImage.src = images[counter - 1];
			}
			newCarouselItem.appendChild(newCarouselItemImage);
			newCarouselItem.style.left = `${-1 * 100}%`;
			newCarouselItem.style.transition = `${animationDuration}ms linear left`;
			carouselTrack.current.insertBefore(
				newCarouselItem,
				carouselTrack.current.firstChild,
			);
		}
	};

	return (
		<section
			ref={carousel}
			className={classes['location-carousel']}
			role="region"
			aria-label="location carousel"
		>
			<ul ref={carouselTrack} className={classes['carousel-track']}>
				<li
					className={`${classes['carousel-item']} `}
					style={{ left: `${-1 * 100}%` }}
				>
					<img src={images[images.length - 1]} />
				</li>
				<li
					className={`${classes['carousel-item']} `}
					style={{ left: `${0 * 100}%` }}
				>
					<img src={images[0]} />
				</li>
				<li
					className={`${classes['carousel-item']} `}
					style={{ left: `${1 * 100}%` }}
				>
					<img src={images[1]} />
				</li>

				{/* // Todo : Duplicate first image at the end if there are only two images to create animation */}
				{images.length === 2 ? (
					<div className={classes['carousel-item']}>
						<img src={images[0]} />
					</div>
				) : null}
			</ul>

			{/* Display controls only if there are more than one image  */}
			{images.length > 1 ? (
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
			) : null}
		</section>
	);
};

export default Carousel;

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string),
};
