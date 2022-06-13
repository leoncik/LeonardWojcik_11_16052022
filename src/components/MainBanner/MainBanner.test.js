import { render, screen } from '@testing-library/react';
import MainBanner from './MainBanner';

describe('Testing main banner', () => {
	it('should display a text if one is passed as props', () => {
		render(<MainBanner title={<h1>Hello</h1>} />);
		const bannerTitle = screen.getByText('Hello');
		expect(bannerTitle).toBeInTheDocument();
	});
});
