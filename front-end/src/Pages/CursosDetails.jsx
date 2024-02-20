import React from "react";

import styles from "../Assets/App.module.css"

import CursoDetails from "../components/Cursos/CursosDetailsC";




function CursosDetails() {
  return (
    <div className={styles.App}>
        <CursoDetails/>
    </div>
  );
}

export default CursosDetails;