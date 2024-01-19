import {createContext, useState, useEffect} from "react";
import data from "./Data/data.json"

const CursosContext = createContext();

function CursosContextProvider( props ){
    
    const [cursos, setData] = useState([]);

    useEffect(() => {
        setData(data)
      }, []);
    
      console.log(cursos)
    return(
        <CursosContext.Provider value={{cursos, setData}}>
          {props.children}
        </CursosContext.Provider>
    )
}
export {CursosContext, CursosContextProvider}