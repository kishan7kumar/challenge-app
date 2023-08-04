import { createContext } from "react";

const thresholdContext = createContext({
  threshold: {
    limit: 10,
    boopsCount: 0,
    bipsCount: 0,
  },
});

thresholdContext.displayName = "thresholdContext";

export default thresholdContext;
