import React, { useEffect, useState } from "react";

export interface FetchResult {
  title: string;
  location_type: string;
  woied: number; //Where On Earth ID
  latt_long: string;
}

export const ServicesTestsPage: React.FC = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<FetchResult[]>([]);

  useEffect(() => {
    if (location) {
      const APILink = `http://www.metaweather.com/api/location/search/?query=${location}`;
      const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
      fetch(corsAnywhere + APILink)
        .then((result) => {
          result
            .json()
            .then((res) => {
              setData(res);
            })
            .catch((error) => {
              console.log("JSON Error:", error);
            });
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [location]);

  return (
    <div>
      <h1>Services Tests Page</h1>
      <input
        type="text"
        onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
          setLocation(text.target.value);
        }}
      />
      <p>{"Search Results: "}</p>
      {data.map((location: FetchResult) => (
        <p key={location.woied}>{location.title}</p>
      ))}
    </div>
  );
};
