import PropTypes from 'prop-types';
import classes from './Host.module.css';

const Host = ({ host }) => {
	return (
		<div className={classes['host-profile']}>
			<p>{host.name}</p>
			<img src={host.picture}></img>
		</div>
	);
};

export default Host;

Host.propTypes = {
	host: PropTypes.object,
};
