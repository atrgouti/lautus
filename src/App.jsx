import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

//importing use context
import ThemeContext from "./generalComponents/ThemeContext";
function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
