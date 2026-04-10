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

    const saveFact = () => {
      if (!fact) return;

      const exists = savedFacts.some(
        (saved) => saved.id === fact.id);
        
      if (exists) {
        setSavedFacts([...savedFacts, facts])

      };
    };
    
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="app">
      <h1>Dog App</h1>

      <p className="counter">Dog Facts viewed: {factCount}</p>

      <button onClick={fetchFact}>Get Fact</button>

      {loading && <p>Loading fact...</p>}

      {fact && !loading && (
        <div className="fact-card">
          <p className="fact">{fact.fact}</p>

          <button className="save-btn" onClick={saveFact}>
            Save Fact
          </button>
        </div>
      )}

      {savedFacts.length > 0 && (
        <div className="saved-facts-section">
          <h2>Saved Facts</h2>

          {savedFacts.map((f, index) => (
            <div key={index} className="saved-fact">
              <p className="fact">{f.fact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default App;



