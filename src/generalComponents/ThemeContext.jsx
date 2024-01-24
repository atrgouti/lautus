import React, { useState } from "react";

export const themeContext = React.createContext();
function ThemeContext({ children }) {
  const [activeSide, setActiveSide] = useState(false);
  const [activeCard, setActiveCard] = useState(false);

  return (
    <themeContext.Provider
      value={{
        activeSide: activeSide,
        setActiveSide: setActiveSide,
        activeCard: activeCard,
        setActiveCard: setActiveCard,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;
