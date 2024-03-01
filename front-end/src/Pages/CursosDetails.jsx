import React from "react";
import { Suspense, lazy} from "react";
import styles from "../Assets/App.module.css"

const CursoDetails = lazy(()=> import("../components/Cursos/CursosDetailsC"));




function CursosDetails() {
  return (
    <div className={styles.App}>
        <CursoDetails/>
    </div>
  );
}

export default CursosDetails;