import { useContext } from "react";
import thresholdContext from "../utils/thresholdContext";
import "../stylesheets/ThresholdInput.css";

const ThresholdInput = () => {
  const { threshold, setThreshold } = useContext(thresholdContext);
  return (
    <div className="input-container">
      <div className="title">Threshold:</div>
      <input
        type="number"
        placeholder="Enter threshold..."
        className="input-field"
        value={threshold.limit}
        onChange={(e) => {
          if (e.target.value > 0 || e.target.value === "") {
            setThreshold({
              bipsCount: 0,
              boopsCount: 0,
              limit: e.target.value,
            });
          } else {
            alert("Oops!! wrong value range is from 1 to infinity");
          }
        }}
      />
    </div>
  );
};

export default ThresholdInput;
