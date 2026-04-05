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
  return (
    <div className="antialiased overflow-x-hidden">
      <Particles />
      <Navbar />
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
