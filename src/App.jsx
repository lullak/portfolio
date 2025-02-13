// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Experience />
        <Game />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
