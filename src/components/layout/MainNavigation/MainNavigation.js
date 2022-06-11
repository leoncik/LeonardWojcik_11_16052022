import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import Logo from '../../Logo';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div>
				<NavLink className={classes['header-logo']} to="/">
					<Logo />
				</NavLink>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
							})}
						>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/a-propos"
							style={({ isActive }) => ({
								textDecoration: isActive ? 'underline' : 'none',
							})}
						>
							À propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
