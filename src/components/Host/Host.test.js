import { render, screen } from '@testing-library/react';
import Host from './Host';

const mockedName = 'Jean-Pierre Afeu';
const mockedNameHTML =
	'<p>Jean-Pierre <br>Afeu</p><img alt="Photo de profil de Jean-Pierre Afeu">';

describe('Testing host name display', () => {
	it('should split the first name and the last name', () => {
		render(<Host host={{ name: mockedName }} />);
		const hostProfile = screen.getByTestId('host-profile');
		expect(hostProfile.innerHTML).toBe(mockedNameHTML);
	});
});
