import Logo from '../../Logo';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes['main-footer']}>
			<div>
				<Logo />
			</div>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
