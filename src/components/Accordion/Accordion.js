import classes from './Accordion.module.css';
import PropTypes from 'prop-types';
import ChevronDown from '../ChevronDown';
import { useState, useRef, useEffect } from 'react';

const Accordion = ({ title, content }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState();

	const heightRef = useRef();

	useEffect(() => {
		setContentHeight(`${heightRef.current.scrollHeight}px`);
	}, []);

	const toggleIsExpanded = () => {
		setIsExpanded(!isExpanded);
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
						cssClassName={isExpanded && classes['chevron-rotated']}
					/>
				</button>
			</dt>
			<dd
				ref={heightRef}
				className={
					isExpanded ? classes['accordion-content_open'] : 'accordion-content'
				}
				style={{ height: isExpanded ? `${contentHeight}` : '0px' }}
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
