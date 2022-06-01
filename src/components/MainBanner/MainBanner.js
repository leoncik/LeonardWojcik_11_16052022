import PropTypes from 'prop-types';
import classes from './MainBanner.module.css';

const MainBanner = ({ title, background }) => {
	return (
		<div
			className={classes['main-banner']}
			style={{ backgroundImage: `url(${background})` }}
		>
			{title ? <h1>{title}</h1> : null}
		</div>
	);
};

export default MainBanner;

MainBanner.propTypes = {
	title: PropTypes.string,
	background: PropTypes.string,
};
