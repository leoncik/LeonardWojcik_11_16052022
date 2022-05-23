import classes from './Accordion.module.css';
import PropTypes from 'prop-types';

const Accordion = (props) => {
	return (
		<div className={classes['accordion-item']}>
			<details>
				<summary>{props.title}</summary>
				<p>{props.content}</p>
			</details>
		</div>
	);
};

export default Accordion;

Accordion.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};
