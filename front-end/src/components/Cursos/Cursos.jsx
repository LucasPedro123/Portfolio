import React from "react";
import NavBar from './Navbar/Navbar'
import styles from "./Curso.module.css"
import { useContext } from "react";
import {Link} from 'react-router-dom'
import  {CursosContext} from "../../Context/CarrinhoContexto";



function Cursos (){
  const { cursos, setData } = useContext(CursosContext);
    
    return ( 
        <section className={styles.container}>
        <NavBar/>
        <div className={styles.articleList}>
            {cursos.map((curso) => (
                <div key={curso.id}>
                    {curso.Artigos.map((article) => (
                        <div key={article.id} className={styles.articleItem} >
                            <Link to={`/artigos/${article.id}`}>
                                <img src={article.imagem}  />
                                <h3 >{article.titulo}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        <div className={styles.topBlur}/>

        <div className={styles.bottomBlur}/>

    </section>
    )
}

export default Cursos;