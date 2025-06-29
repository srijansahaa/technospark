import React, { useState } from "react";
import "./App.css";

const App = () => {
  const headlines = [
    { text: "Aliens Land in Delhi, Ask for Masala Dosa", isReal: false },
    { text: "India Launches Solar Power Satellite to Orbit", isReal: true },
    { text: "Man Claims to Time Travel Using Only a Pressure Cooker", isReal: false },
    { text: "New Parliament Building Inaugurated with Eco-Friendly Tech", isReal: true },
    { text: "Cat Becomes Mayor of Small Town, Declares Nap Time Mandatory", isReal: false },
    { text: "ISRO Successfully Tests Reusable Rocket System", isReal: true }
  ];

  const [revealed, setRevealed] = useState(Array(headlines.length).fill(false));

  const handleClick = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  return (
    <div className="app-background">
      <div className="container">
        <h1 className="heading">📰 TechnoSpark Newsroom</h1>
        <div className="tiles">
          {headlines.map((item, index) => (
            <div
              key={index}
              className={`tile ${
                revealed[index]
                  ? item.isReal
                    ? "real"
                    : "fake"
                  : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item.text}
              {revealed[index] && (
                <div className="status">
                  {item.isReal ? "Real ✅" : "Fake ❌"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
