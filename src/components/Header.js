import { useContext } from "react";
import thresholdContext from "../utils/thresholdContext";
import "../stylesheets/Header.css";

const Header = () => {
  const { threshold } = useContext(thresholdContext);
  return (
    <div className="header">
      <span>
        I'VE CLICKED {threshold.boopsCount + threshold.bipsCount} TOTAL TIMES
        :&#41;
      </span>
    </div>
  );
};

export default Header;
