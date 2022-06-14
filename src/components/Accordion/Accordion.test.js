import { render, screen, fireEvent } from '@testing-library/react';
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
		expect(displayedAccordionContent).toHaveAttribute('aria-hidden', 'false');
	});

	it('should be open when clicked', () => {
		render(
			<dl className="accordion-group">
				<Accordion title={accordionTitle} content={accordionContent} />
			</dl>,
		);
		const displayedAccordionContent = screen.getByTestId('accordion-content');
		const AccordionToggler = screen.getByRole('button');
		fireEvent.click(AccordionToggler);
		expect(displayedAccordionContent).toHaveAttribute('aria-hidden', 'false');
	});
});
