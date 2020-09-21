import { getClientLocalization } from "../services/client-localization";

interface RequestProps {
  location: string;
}

export interface FetchResult {
  title: string;
  location_type: string;
  woeid: number; //Where On Earth ID
  latt_long: string;
  distance?: number; //metres - only on lattlong request
}

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

//TODO: Make an unique function?

export async function RequestByName(
  props: RequestProps
): Promise<FetchResult[] | void> {
  console.log("entrou na funcao de pegar as informacoes pelo nome");

  const APILink = `http://www.metaweather.com/api/location/search/?query=${props.location}`;
  try {
    const result = await fetch(corsAnywhere + APILink);
    console.log(result);
    try {
      const data: FetchResult[] = await result.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("JSON Error:", error);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function RequestByLattAndLong(): Promise<FetchResult[] | void> {
  console.log("entrou na funcao de pegar as informacoes pelas coordendadas");
  try {
    const localization = await getClientLocalization();
    const APILink = `http://www.metaweather.com/api/location/search/?lattlong=${localization}`;
    try {
      const result = await fetch(corsAnywhere + APILink);
      console.log(result);
      try {
        const data: FetchResult[] = await result.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log("JSON Error:", error);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  } catch (error) {
    console.log("Localization not found:", error);
  }
}

export interface ClimateDetails {
  title: string;
  localization_type: string;
  latt_log: string;
  time: string;
  sun: string;
  timezone_name: string;
  parent: object;
  consolidated_weather: WeatherResponseFormat[];
  sources: Array<{
    title: string;
    url: string;
  }>;
}

export interface WeatherResponseFormat {
  id: number;
  created: string;
  applicable_date: string;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export function climateCityDetails(woied: number): Promise<ClimateDetails> {
  const APILink = `https://www.metaweather.com/api/location/${woied}/`;
  return new Promise((res, rej) => {
    fetch(corsAnywhere + APILink)
      .then((result: Response) => {
        const data = result.json();
        res(data);
      })
      .catch((error) => rej(`Fetch failed: ${error}`));
  });
}
