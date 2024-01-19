import React from "react";
import NavBar from '../NavBar/Navbar'
import styles from "./Curso.module.css"
import { useContext } from "react";
import {Link} from 'react-router-dom'
import  {CursosContext} from "../../Context/CarrinhoContexto";



function Cursos (){
  const { cursos, setData } = useContext(CursosContext);
    
    return ( 
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Cursos</h2>
            <div className={styles.content}>
                
                <ul className={styles.aboutItems}>
                        <div >
                            {
                                cursos.map((item) => (
                                    <div >
                                        {item.Cursos.map((e) => (
                                            <div >
                                                <li className={styles.aboutItem}>
                                                <div className={styles.skillImageContainer}>
                                                    <Link to={`/cursos/${e.id}`}>
                                                        <img src={e.logo} className={styles.skillImage}alt="" />
                                                    </Link>
                                                </div>
                                                </li>
                                                <h5>{e.curso}</h5>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Cursos;