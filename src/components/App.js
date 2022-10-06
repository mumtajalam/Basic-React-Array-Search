import React, { useEffect, useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];

const App = () => {
  const [arr, setArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchCall = () => {
    if (searchTerm !== "") {
      const newArray = searchArray.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setArray(newArray);
    } else {
      setArray([]);
    }
  };
  useEffect(() => {
    searchCall();
  }, [searchTerm]);
  return (
    <div id="main">
      <h3>Search</h3>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h3>Results</h3>
      <ul>{arr && arr.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
};

export default App;
