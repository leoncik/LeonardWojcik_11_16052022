import PropTypes from 'prop-types';
import classes from './Tag.module.css';

const Tag = (props) => {
	return <li className={classes['location-tag']}>{props.tag}</li>;
};

export default Tag;

Tag.propTypes = {
	tag: PropTypes.string,
};
