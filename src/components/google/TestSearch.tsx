import React, { useState } from "react";
import axios from "axios";

const PlacesSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchPlaces = () => {
    const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
    const input = query;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setResults(response.data.predictions);
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={searchPlaces}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.place_id}>{result.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlacesSearch;
