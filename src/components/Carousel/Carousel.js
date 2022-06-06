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

	const handleNextImage = () => {
		if (animate === true) {
			setAnimate(false);

			console.log(counter);
			counter++;
			setImageNumber(imageNumber + 1);
			// Select all carousel items
			carouselItems = carouselTrack.current.children;
			// ! forEach loops no working ?
			// carouselItems.forEach((el)=>{
			// 	console.log(el)
			// })
			for (let i = carouselItems.length; i--; ) {
				carouselItems[i].style.left = `${(i - 2) * 100}%`;
				carouselItems[i].style.transition = '800ms linear left';
				// Wait end of animation before enabling click again.
				setTimeout(() => {
					setAnimate(true);
				}, 800);
			}
			// Remove first child of carouselTrack
			carouselTrack.current.removeChild(carouselTrack.current.firstChild);
			// Create a new carousel item at the end of carouselTrack
			const newCarouselItem = document.createElement('li');
			newCarouselItem.className = classes['carousel-item'];
			const newCarouselItemImage = document.createElement('img');
			// Set src according to imageNumber
			if (imageNumber === totalOfImages - 1) {
				setImageNumber(1);
				newCarouselItemImage.src = images[0];
			} else {
				newCarouselItemImage.src = images[imageNumber + 1];
			}
			newCarouselItem.appendChild(newCarouselItemImage);
			newCarouselItem.style.left = `${(carouselItems.length - 1) * 100}%`;
			newCarouselItem.style.transition = '800ms linear left';
			carouselTrack.current.appendChild(newCarouselItem);
		}
	};

	const handlePreviousImage = () => {
		console.log(counter);
		counter++;
		setImageNumber(imageNumber + 1);
		// Select all carousel items
		carouselItems = carouselTrack.current.children;
		// ! forEach loops no working ?
		// carouselItems.forEach((el)=>{
		// 	console.log(el)
		// })
		for (let i = carouselItems.length; i--; ) {
			carouselItems[i].style.left = `${i * 100}%`;
			carouselItems[i].style.transition = '800ms linear left';
		}
		// Remove last child of carouselTrack
		carouselTrack.current.removeChild(carouselTrack.current.lastChild);
		// Create a new carousel item at the beginning of carouselTrack
		const newCarouselItem = document.createElement('li');
		newCarouselItem.className = classes['carousel-item'];
		const newCarouselItemImage = document.createElement('img');
		// Set src according to imageNumber
		if (imageNumber === 0) {
			setImageNumber(1);
			newCarouselItemImage.src = images[images.length - 1];
		} else {
			newCarouselItemImage.src = images[imageNumber - 1];
		}
		newCarouselItem.appendChild(newCarouselItemImage);
		newCarouselItem.style.left = `${-1 * 100}%`;
		newCarouselItem.style.transition = '800ms linear left';
		carouselTrack.current.insertBefore(
			newCarouselItem,
			carouselTrack.current.firstChild,
		);
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
			{/* // Todo: display controls only if there are more than one image  */}
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
		</section>
	);
};

export default Carousel;

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string),
};
