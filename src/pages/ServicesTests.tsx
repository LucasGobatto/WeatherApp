import React, { useEffect, useState, useRef } from "react";

import {
  FetchResult,
  RequestByName,
  RequestByLattAndLong,
} from "../services/api-requests";

export const ServicesTestsPage: React.FC = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState<FetchResult[]>([]);

  //get client's current localization
  useEffect(() => {
    async function getCurrentLocalization() {
      const response = await RequestByLattAndLong();
      if (response) {
        setData(response);
      }
    }
    getCurrentLocalization();
  }, []);

  //get searched city
  function handleClick() {
    async function makeRequest() {
      if (text || true) {
        const response = await RequestByName({ location: text });
        if (response) {
          setData(response);
        }
      }
    }
    makeRequest();
  }

  return (
    <div>
      <h1>Services Tests Page</h1>
      <div className="forms-by-name">
        <p>Search by City Name</p>
        <input
          type="text"
          onChange={(text: React.ChangeEvent<HTMLInputElement>) => {
            setText(text.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <p>{"Search Results: "}</p>
      {data.map((location: FetchResult) => (
        <p key={location.title + location.woied}>{location.title}</p>
      ))}
    </div>
  );
};
