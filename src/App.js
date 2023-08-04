import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import ThresholdInput from "./components/ThresholdInput";
import thresholdContext from "./utils/thresholdContext";
import Image from "./components/Image";

function App() {
  const [threshold, setThreshold] = useState({
    limit: 10,
    boopsCount: 0,
    bipsCount: 0,
  });

  return (
    <thresholdContext.Provider
      value={{
        threshold: threshold,
        setThreshold: setThreshold,
      }}
    >
      <div className="App">
        <Header></Header>
        <div className="main">
          <ThresholdInput></ThresholdInput>
          <div className="flex-container">
            <PrimaryButton title="Boop"></PrimaryButton>
            <Image></Image>
            <PrimaryButton title="Bip"></PrimaryButton>
          </div>
        </div>
      </div>
    </thresholdContext.Provider>
  );
}

export default App;
