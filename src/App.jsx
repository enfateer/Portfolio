import { useState, useEffect } from "react";
import "./styles/App.css";
import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="antialiased overflow-x-hidden">
      <Particles />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <Profile />
        <Education />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
