import {Suspense, lazy} from "react";

import styles from "../Assets/App.module.css"

const NavBar = lazy(()=> import("../components/NavBar/Navbar"));
const Hero = lazy(()=> import("../components/Hero/Hero"));
const About = lazy(()=> import("../components/About/About"));
const Experience = lazy(()=> import("../components/Experience/Experience"));
const Projects = lazy(()=> import("../components/Projects/Project"));
const Contact = lazy(()=> import("../components/Contact/Contact"));



function Home() {
  return (
    <div className={styles.App}>
        <Suspense fallback={<p>Carregando...</p>}>
          <NavBar/>
          <Hero />
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </Suspense>
    </div>
  );
}

export default Home;