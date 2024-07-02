import { About, Hero, Navbar, Projects, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
      <div className="bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  );
}

export default App;
