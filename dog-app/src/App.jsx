//  "https://www.thesportsdb.com/free_sports_api" - 
// this is the sports api I'm going to use for my app 
// src/components/ApiData.jsx
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [factCount, setFactCount] = useState(0);
  const [savedFacts, setSavedFacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await response.json();

      setData(data);
      setLoading(false);  

      useEffect(() => {
        fetchData();
      }, []);
    };
  }, []);

  return (
      <div className="app">
      <h1>Data App</h1>

       

      {loading && <p>Loading Data...</p>}

      {Data && !loading && (
        <div className="data-card">

        </div>
      )}
    </div>
  );
};

export default App;



