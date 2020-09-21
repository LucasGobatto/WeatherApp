import { getClientLocalization } from "../services/client-localization";

interface RequestProps {
  location: string;
}

export interface FetchResult {
  title: string;
  location_type: string;
  woied: number; //Where On Earth ID
  latt_long: string;
  distance?: number; //metres - only on lattlong request
}

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

//TODO: Make an unique function

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
