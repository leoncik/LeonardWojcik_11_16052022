import { render, screen } from '@testing-library/react';
import App from './App';
import { HashRouter } from 'react-router-dom';

it('should render main navigation', () => {
	render(
		<HashRouter>
			<App />
		</HashRouter>,
	);
	const linkElement = screen.getByText(/Accueil/i);
	expect(linkElement).toBeInTheDocument();
});

it('should render footer', () => {
	render(
		<HashRouter>
			<App />
		</HashRouter>,
	);
	const footerText = screen.getByText(/© 2020 Kasa. All rights reserved/i);
	expect(footerText).toBeInTheDocument();
});
