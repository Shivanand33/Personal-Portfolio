import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Project } from "@/section/Project";
import { Experiance } from "@/section/Experiance";
import { Testimonials } from "@/section/Testimonials";
import { Contact } from "@/section/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experiance />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
