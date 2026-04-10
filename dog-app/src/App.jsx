import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [factCount, setFactCount] = useState(0);
  const [savedFacts, setSavedFacts] = useState([]);

  const fetchFact = async () => {
      setLoading(true);

      const response = await fetch("https://dogapi.dog/api/v2/facts"

      );

      const data = await response.json();

       setFact(data);
       setFactCount((prev) => prev + 1);
      setLoading(false); 
    };



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



