import { About, Hero, Navbar, Projects, Contact, Footer } from "./components";
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
      <Footer />
    </div>
  );
}

export default App;
