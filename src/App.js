import React, { useState } from "react";
import "./App.css";

const App = () => {
  const headlines = [
    { text: "Dubai Announces Drone-Supported Floating Cinema Experience", isReal: false },
    { text: "Woman with objects fetish marries Eiffel Tower", isReal: true },
    { text: "TikTok Testing Dream Recording Feature Called 'SleepTok'", isReal: false },
    { text: "Scientists create first synthetic embryos in lab without sperm or eggs", isReal: false },
    { text: "Indian Man Sues Parents for Giving Birth to Him Without His Consent", isReal: true },
    { text: "Scientists build mouse embryos without eggs or sperm in a world-first experiment", isReal: true }
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
              className={`tile ${revealed[index]
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
