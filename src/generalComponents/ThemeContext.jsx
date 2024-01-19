import React, { useState } from "react";

export const themeContext = React.createContext();
function ThemeContext({ children }) {
  const [activeSide, setActiveSide] = useState(false);
  return (
    <themeContext.Provider
      value={{ activeSide: activeSide, setActiveSide: setActiveSide }}
    >
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;
