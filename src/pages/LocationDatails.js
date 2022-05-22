import { useParams } from 'react-router-dom';
import { MOCKED_DATA } from '../helpers/MOCKED_DATA';
import Error404 from './Error404';

const LocationDetails = () => {
	const { id } = useParams();
	const currentLocation = MOCKED_DATA.find((location) => location.id === id);

	return currentLocation ? (
		<div>
			<h1>{currentLocation.title}</h1>
			<h2>{currentLocation.location}</h2>
			<p>{currentLocation.description}</p>
			{console.log(currentLocation)}
		</div>
	) : (
		<Error404 />
	);
};

export default LocationDetails;
