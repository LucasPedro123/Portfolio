import React from "react";

import styles from "../Assets/App.module.css"

import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About"
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Project"
import Contact from "../components/Contact/Contact";
import {CursoDetails} from "../components/Cursos/CursosDetails";




function CursosDetails() {
  return (
    <div className={styles.App}>
        <NavBar/>
        <CursoDetails/>
    </div>
  );
}

export default CursosDetails;