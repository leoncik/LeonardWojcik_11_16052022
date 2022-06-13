import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

const mockedImages = [
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/400',
	'https://picsum.photos/200/500',
];
const mockedImage = ['https://picsum.photos/200/300'];

describe('Testing carousel', () => {
	it('should show controls if there is more than one image', () => {
		render(<Carousel images={mockedImages} />);
		const nextImageButton = screen.getByTestId('next-image-button');
		const previousImageButton = screen.getByTestId('previous-image-button');
		expect(nextImageButton).toBeInTheDocument();
		expect(previousImageButton).toBeInTheDocument();
	});

	it('should not show the controls if there is only one image', () => {
		render(<Carousel images={mockedImage} />);
		const nextImageButton = screen.queryByTestId('next-image-button');
		const previousImageButton = screen.queryByTestId('previous-image-button');
		expect(nextImageButton).not.toBeInTheDocument();
		expect(previousImageButton).not.toBeInTheDocument();
	});
});
