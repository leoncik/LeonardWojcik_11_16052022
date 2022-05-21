import PropTypes from 'prop-types';
import classes from './MainBanner.module.css';

const MainBanner = (props) => {
	return (
		<div
			className={classes['main-banner']}
			style={{ background: `url(${props.background})` }}
		>
			{props.title ? <h1>{props.title}</h1> : null}
		</div>
	);
};

export default MainBanner;

MainBanner.propTypes = {
	title: PropTypes.string,
	background: PropTypes.string,
};
