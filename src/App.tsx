import { About, Hero, Navbar, Projects, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="w-full bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
