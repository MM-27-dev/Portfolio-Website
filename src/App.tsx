import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? "dark" : ""} overflow-x-hidden`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Certificates isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
