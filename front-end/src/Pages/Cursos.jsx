import React from "react";


const Cursos = lazy(()=> import("../components/Cursos/Cursos"));




function Cursos1() {
  return (
    <div >
        
        <Cursos/>
    </div>
  );
}

export default Cursos1;