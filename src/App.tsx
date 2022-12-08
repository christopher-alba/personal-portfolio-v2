import { useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Landing from "./sections/Landing";
import SocialLinks from "./components/SocialLinks";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Education from "./sections/Education";

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
      <Projects />
      <Education />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
