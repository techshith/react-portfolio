import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";
import Sagar from "./components/Sagar";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

export const App = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>      </div>
      <div className="container mx-auto px-8">
        <Navbar scrollToContact={scrollToContact} />
        <Sagar/>
        <About/>
        <Education/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact ref={contactRef} />

      </div>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
};

export default App;
