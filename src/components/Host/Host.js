import PropTypes from 'prop-types';
import classes from './Host.module.css';

const Host = ({ host }) => {
	const firstName = host.name.split(' ').shift();
	const lastName = host.name.split(' ').splice(1).join(' ');

	return (
		<div className={classes['host-profile']} data-testid="host-profile">
			<p>
				{firstName} <br />
				{lastName}
			</p>
			<img src={host.picture} alt={`Photo de profil de ${host.name}`} />
		</div>
	);
};

export default Host;

Host.propTypes = {
	host: PropTypes.object,
};
