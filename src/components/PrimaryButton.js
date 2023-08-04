import { useContext } from "react";
import thresholdContext from "../utils/thresholdContext";
import "../stylesheets/PrimaryButton.css";

const PrimaryButton = ({ title }) => {
  const { threshold, setThreshold } = useContext(thresholdContext);
  return (
    <div className="button-container">
      <div className="title">
        {title}s:{" "}
        {title === "Boop" ? threshold.boopsCount : threshold.bipsCount}
      </div>

      <button
        disabled={
          threshold.limit <= 0 ||
          threshold.bipsCount + threshold.boopsCount >= threshold.limit
            ? true
            : false
        }
        className="button"
        onClick={() => {
          setThreshold(
            title === "Boop"
              ? {
                  ...threshold,
                  boopsCount: threshold.boopsCount + 1,
                }
              : {
                  ...threshold,
                  bipsCount: threshold.bipsCount + 1,
                }
          );
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
