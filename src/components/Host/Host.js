import PropTypes from 'prop-types';
import classes from './Host.module.css';

const Host = (props) => {
	return (
		<div className={classes['host-profile']}>
			<p>{props.host.name}</p>
			<img src={props.host.picture}></img>
		</div>
	);
};

export default Host;

Host.propTypes = {
	host: PropTypes.string,
};
