import PropTypes from 'prop-types';
import classes from './MainBanner.module.css';

const MainBanner = ({ title, background }) => {
	return (
		<div
			className={classes['main-banner']}
			style={{ backgroundImage: `url(${background})` }}
		>
			{title ? (
				<div className={classes['banner-title-container']}>{title}</div>
			) : null}
		</div>
	);
};

export default MainBanner;

MainBanner.propTypes = {
	title: PropTypes.string,
	background: PropTypes.string,
};
