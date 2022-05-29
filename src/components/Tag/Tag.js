import PropTypes from 'prop-types';
import classes from './Tag.module.css';

const Tag = ({ tag }) => {
	return <li className={classes['location-tag']}>{tag}</li>;
};

export default Tag;

Tag.propTypes = {
	tag: PropTypes.string,
};
