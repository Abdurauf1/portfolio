import { About, Hero, Navbar, Projects, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="w-full  bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
