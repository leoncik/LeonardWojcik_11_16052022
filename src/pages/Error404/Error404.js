import { Link } from 'react-router-dom';
import classes from './Error404.module.css';

// Todo : scroll to top after clicking to redirection link.

const Error404 = () => {
	return (
		<div className={classes['error404-container']}>
			<h1>404</h1>
			<p>{"Oups! La page que vous demandez n'existe pas."} </p>
			<Link to="/">{'Retourner sur la page d’accueil'}</Link>
		</div>
	);
};

export default Error404;