import React from "react";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";

import "@fontsource/outfit";
import "@fontsource/roboto";
import styles from "./Assets/App.module.css"

import About from "./components/About/About"
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className={styles.App}>
        <NavBar/>
        <Hero />
        <About/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
