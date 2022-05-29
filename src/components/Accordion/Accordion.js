import classes from './Accordion.module.css';
import PropTypes from 'prop-types';

const Accordion = ({ title, content }) => {
	return (
		<div className={classes['accordion-item']}>
			<details>
				<summary>{title}</summary>
				<p>{content}</p>
			</details>
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
