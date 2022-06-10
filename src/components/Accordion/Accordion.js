import classes from './Accordion.module.css';
import PropTypes from 'prop-types';
import ChevronDown from './ChevronDown';
import { useState, useRef } from 'react';

const Accordion = ({ title, content }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const heightRef = useRef();

	const toggleIsExpanded = () => {
		setIsExpanded(!isExpanded);
		if (isExpanded) {
			heightRef.current.style.height = `${heightRef.current.scrollHeight}px`;
			setTimeout(() => {
				heightRef.current.style.height = '0px';
			}, 1);
		} else {
			heightRef.current.style.height = `${heightRef.current.scrollHeight}px`;
			setTimeout(() => {
				heightRef.current.style.height = 'auto';
			}, 200);
		}
	};

	return (
		<div className={classes['accordion-item']}>
			<dt>
				<button
					onClick={toggleIsExpanded}
					aria-expanded={isExpanded ? true : false}
				>
					{title}
					<ChevronDown
						cssClassName={isExpanded ? classes['chevron-rotated'] : null}
					/>
				</button>
			</dt>
			<dd
				ref={heightRef}
				className={
					isExpanded
						? classes['accordion-content_open']
						: classes['accordion-content']
				}
				aria-hidden={isExpanded ? false : true}
			>
				{Array.isArray(content) && (
					<ul>
						{content.map((elt, index) => (
							<li key={index}>{elt}</li>
						))}
					</ul>
				)}
				{typeof content === 'string' && <p>{content}</p>}
			</dd>
		</div>
	);
};

export default Accordion;

Accordion.propTypes = {
	title: PropTypes.string,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
};
