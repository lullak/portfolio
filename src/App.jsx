// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Game from "./components/Game";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
       {/*  <Game />*/}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
