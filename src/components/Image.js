import { useContext } from "react";
import thresholdContext from "../utils/thresholdContext";
import "../stylesheets/Image.css";

const Image = () => {
  const { threshold } = useContext(thresholdContext);
  return (
    <div
      className="image-container"
      style={{
        opacity:
          ((threshold.boopsCount + threshold.bipsCount - 0) * (1 - 0)) /
            (threshold.limit || 1 - 0) +
          0,
      }}
    >
      <img alt="panda eating bamboo" src="../pandaimage.png" />
    </div>
  );
};

export default Image;
