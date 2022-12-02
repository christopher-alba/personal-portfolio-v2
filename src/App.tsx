import { useState } from "react";
import reactLogo from "./assets/react.svg";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Navbar from "./components/Navbar";
import About from "./sections/About";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar setSelectedTheme={setSelectedTheme} />
      <About />
    </ThemeProvider>
  );
};

export default App;
