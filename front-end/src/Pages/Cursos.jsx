import React from "react";

import styles from "../Assets/App.module.css"

import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About"
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Project"
import Contact from "../components/Contact/Contact";
import Cursos from "../components/Cursos/Cursos";




function Cursos1() {
  return (
    <div className={styles.App}>
        <NavBar/>
        <Cursos/>
    </div>
  );
}

export default Cursos1;