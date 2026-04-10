import React, { useEffect, useState } from "react";
import "./App.css";

// Main App start
const App = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [factCount, setFactCount] = useState(0);
  const [savedFacts, setSavedFacts] = useState([]);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dogapi.dog/api/v2/facts");
      const data = await response.json();

      const factData = {
        id: data.data[0].id,
        fact: data.data[0].attributes.body,
      };

      setFact(factData);
      setFactCount((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching dog fact:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveFact = () => {
    if (!fact) return;

    const exists = savedFacts.some((saved) => saved.id === fact.id);

    if (!exists) {
      setSavedFacts((prev) => [...prev, fact]);
    }
  };

  useEffect(() => {
    fetchFact(); 
  }, []);

  return (
    <div className="app">
      <h1>Dog App 🐶</h1>

      <p className="counter">Dog Facts Viewed: {factCount}</p>

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
          {savedFacts.map((f) => (
            <div key={f.id} className="saved-fact">
              <p className="fact">{f.fact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;



