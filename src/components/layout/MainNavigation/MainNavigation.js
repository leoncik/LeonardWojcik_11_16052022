import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Logo from '../../Logo';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div>
				<p>
					<Logo />
				</p>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/a-propos">À propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
