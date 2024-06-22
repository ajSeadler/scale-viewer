import React, { useState } from "react";
import CircleOfFifths from "./CircleOfFifths";
import ScaleSelector from "./ScaleSelector";
import ScaleDisplay from "./ScaleDisplay";
import WelcomeComponent from "./WelcomeComponent";

import "../styles/Home.css";

const Home = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedScale, setSelectedScale] = useState("");

  return (
    <>
      <WelcomeComponent />
      <div className="app-container">
        <ScaleSelector setSelectedScale={setSelectedScale} />
        <div className="main-content">
          <CircleOfFifths
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />

          <ScaleDisplay
            selectedKey={selectedKey}
            selectedScale={selectedScale}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
