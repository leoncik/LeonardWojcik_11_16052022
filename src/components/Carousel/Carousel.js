import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import classes from './Carousel.module.css';
import NextImage from './NextImage';
import PreviousImage from './PreviousImage';

const Carousel = ({ images }) => {
	const totalOfImages = images.length;

	const carousel = useRef();

	let carouselTrack = useRef();

	let counter = useRef(0);

	let carouselItems;

	const [imageNumber, setImageNumber] = useState(1);

	const [animate, setAnimate] = useState(true);
	const animationDuration = 800;

	const checkImageNumber = (direction) => {
		switch (direction) {
			case 'toNext': {
				if (imageNumber === totalOfImages) {
					setImageNumber(1);
					counter.current = 0;
				} else {
					setImageNumber(imageNumber + 1);
					counter.current++;
				}

				break;
			}

			case 'toPrevious': {
				if (imageNumber === 1) {
					setImageNumber(totalOfImages);
					counter.current = totalOfImages - 1;
				} else {
					setImageNumber(imageNumber - 1);
					counter.current--;
				}
				break;
			}

			default:
				break;
		}
	};

	const moveImages = (direction) => {
		switch (direction) {
			case 'toNext': {
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
				break;
			}

			case 'toPrevious': {
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
				break;
			}

			default:
				break;
		}
	};

	const rearrangeImages = (direction) => {
		switch (direction) {
			case 'toNext': {
				// Remove first child of carouselTrack
				carouselTrack.current.removeChild(carouselTrack.current.firstChild);
				// Create a new carousel item at the end of carouselTrack
				const newCarouselItem = document.createElement('li');
				newCarouselItem.className = classes['carousel-item'];
				const newCarouselItemImage = document.createElement('img');
				// Set src according to counter
				if (counter.current === totalOfImages - 1) {
					newCarouselItemImage.src = images[0];
					newCarouselItemImage.alt = `Photo de la location (image ${1} sur ${totalOfImages})`;
				} else {
					newCarouselItemImage.src = images[counter.current + 1];
					newCarouselItemImage.alt = `Photo de la location (image ${
						counter.current + 2
					} sur ${totalOfImages})`;
				}
				newCarouselItem.appendChild(newCarouselItemImage);
				newCarouselItem.style.left = `${(carouselItems.length - 1) * 100}%`;
				newCarouselItem.style.transition = `${animationDuration}ms linear left`;
				carouselTrack.current.appendChild(newCarouselItem);

				break;
			}

			case 'toPrevious': {
				// Remove last child of carouselTrack
				carouselTrack.current.removeChild(carouselTrack.current.lastChild);
				// Create a new carousel item at the beginning of carouselTrack
				const newCarouselItem = document.createElement('li');
				newCarouselItem.className = classes['carousel-item'];
				const newCarouselItemImage = document.createElement('img');
				// Set src according to counter
				if (counter.current === -1) {
					newCarouselItemImage.src = images[totalOfImages - 2];
					newCarouselItemImage.alt = `Photo de la location (image ${counter.current} sur ${totalOfImages})`;
				} else if (counter.current === 0) {
					newCarouselItemImage.src = images[totalOfImages - 1];
					newCarouselItemImage.alt = `Photo de la location (image ${totalOfImages} sur ${totalOfImages})`;
				} else {
					newCarouselItemImage.src = images[counter.current - 1];
					newCarouselItemImage.alt = `Photo de la location (image ${counter.current} sur ${totalOfImages})`;
				}
				newCarouselItem.appendChild(newCarouselItemImage);
				newCarouselItem.style.left = `${-1 * 100}%`;
				newCarouselItem.style.transition = `${animationDuration}ms linear left`;
				carouselTrack.current.insertBefore(
					newCarouselItem,
					carouselTrack.current.firstChild,
				);
				break;
			}

			default:
				break;
		}
	};

	const handleNextImage = () => {
		if (animate === true) {
			setAnimate(false);
			checkImageNumber('toNext');
			moveImages('toNext');
			rearrangeImages('toNext');
		}
	};

	const handlePreviousImage = () => {
		if (animate === true) {
			setAnimate(false);
			checkImageNumber('toPrevious');
			moveImages('toPrevious');
			rearrangeImages('toPrevious');
		}
	};

	const handleKeyDown = (e) => {
		switch (e.key) {
			case 'ArrowRight': {
				handleNextImage();
				break;
			}

			case 'ArrowLeft': {
				handlePreviousImage();
				break;
			}

			default:
				break;
		}
	};

	return (
		<section
			ref={carousel}
			className={classes['location-carousel']}
			role="region"
			aria-label="Photos de la location"
			aria-roledescription="carousel"
			tabIndex="0"
			onKeyDown={handleKeyDown}
		>
			<ul ref={carouselTrack} className={classes['carousel-track']}>
				{images.length > 1 && (
					<li
						className={`${classes['carousel-item']} `}
						style={{ left: `${-1 * 100}%` }}
					>
						<img
							src={images[images.length - 1]}
							alt={`Photo de la location (image ${totalOfImages} sur ${totalOfImages})`}
						/>
					</li>
				)}

				<li
					className={`${classes['carousel-item']} `}
					style={{ left: `${0 * 100}%` }}
				>
					<img
						src={images[0]}
						alt={`Photo de la location (image 1 sur ${totalOfImages})`}
					/>
				</li>
				{images.length > 1 && (
					<li
						className={`${classes['carousel-item']} `}
						style={{ left: `${1 * 100}%` }}
					>
						<img
							src={images[1]}
							alt={`Photo de la location (image 2 sur ${totalOfImages})`}
						/>
					</li>
				)}
			</ul>

			{/* Display controls only if there is more than one image  */}
			{images.length > 1 ? (
				<div className="carousel-controls">
					<div>
						<button
							onClick={handlePreviousImage}
							className={classes['previous-image']}
							aria-label="Image précédente"
							type="button"
							tabIndex="0"
							data-testid="previous-image-button"
						>
							<PreviousImage />
						</button>
						<button
							onClick={handleNextImage}
							className={classes['next-image']}
							aria-label="Image suivante"
							type="button"
							tabIndex="0"
							data-testid="next-image-button"
						>
							<NextImage />
						</button>
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
