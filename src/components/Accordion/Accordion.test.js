import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

const accordionTitle = 'Équipements';
const accordionContent =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('Testing accordions', () => {
	it('should be closed by default', () => {
		render(
			<dl className="accordion-group">
				<Accordion title={accordionTitle} content={accordionContent} />
			</dl>,
		);
		const displayedAccordionContent = screen.getByTestId('accordion-content');
		// console.log(displayedAccordionContent.style);
		// expect(displayedAccordionContent).not.toBeVisible();
		// expect(displayedAccordionContent).toHaveStyle('opacity: 0');
	});

	// it('should be open when clicked', () => {
	//     render(<Accordion />);
	//     const accordion = screen.getByTestId('accordion');
	//     const accordionHeader = screen.getByTestId('accordion-header');
	//     accordionHeader.click();
	//     expect(accordion).toHaveClass('accordion-open');
	// })
});
