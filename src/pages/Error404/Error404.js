import { Link } from 'react-router-dom';
import classes from './Error404.module.css';

const Error404 = () => {
	return (
		<main className={classes['error404-container']}>
			<h1>404</h1>
			<p>{"Oups! La page que vous demandez n'existe pas."} </p>
			<Link to="/">{'Retourner sur la page d’accueil'}</Link>
		</main>
	);
};

export default Error404;
