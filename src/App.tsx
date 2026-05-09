import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen selection:bg-accent-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
