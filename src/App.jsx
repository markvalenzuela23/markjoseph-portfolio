import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Method from "./components/sections/Method";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Method />
      <Experience />
      <Contact />
    </>
  );
}

export default App;