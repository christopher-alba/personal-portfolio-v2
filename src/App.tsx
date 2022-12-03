import { useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Landing from "./sections/Landing";
import SocialLinks from "./components/SocialLinks";
import Journey from "./sections/Journey";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar setSelectedTheme={setSelectedTheme} />
      <SocialLinks />
      <Landing />
      <About />
      <Journey />
    </ThemeProvider>
  );
};

export default App;
