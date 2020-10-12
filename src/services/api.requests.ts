import { RequestFunctionsParams, PlacesList, ClimateDetails } from './services.interface';

export const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

function makeRequest(link: string): Promise<any> {
	return new Promise((resolve, reject) => {
		fetch(corsAnywhere + link)
			.then((result: Response) => {
				result.ok ? resolve(result.json()) : console.log('makeRequest says:', result.statusText);
			})
			.catch(reject);
	});
}

export function getClientLocalization(): Promise<string> | void {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				resolve(`${position.coords.latitude},${position.coords.longitude}`);
			},
			(error) => reject(error.message),
		);
	});
}

export function requestByName(props: RequestFunctionsParams): Promise<PlacesList[]> {
	const APILink = `http://www.metaweather.com/api/location/search/?query=${props.name}`;
	return makeRequest(APILink);
}

export async function requestByLattAndLong(): Promise<PlacesList[]> {
	try {
		const localization = await getClientLocalization();
		const APILink = `http://www.metaweather.com/api/location/search/?lattlong=${localization}`;
		return await makeRequest(APILink);
	} catch (error) {
		return [];
	}
}

export function requestByDay(param: RequestFunctionsParams): Promise<ClimateDetails[]> {
	const APILink = `https://www.metaweather.com/api/location/${param.day?.woied}/${param.day?.date}`;
	return makeRequest(APILink);
}

export function climateCityDetails(woied: number): Promise<ClimateDetails> {
	const APILink = `https://www.metaweather.com/api/location/${woied}`;
	return makeRequest(APILink);
}
