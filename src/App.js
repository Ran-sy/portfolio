import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./features/theme";
import "./App.css";
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  let settedTheme = "main";
  const [themeName, setThemeName] = useState(settedTheme);
  const passTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Your theme name determining logic
    setThemeName(settedTheme);
  }, [settedTheme]);

  return (
    <ThemeProvider value={themeName}>
      <NavBar passTheme={passTheme} themeName={themeName} />
      <Banner themeName={themeName} />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
