import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Experience />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;