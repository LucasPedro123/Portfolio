import {React, useContext} from "react";
import  {CursosContext} from "../../Context/CarrinhoContexto";
import styles from './ProjectCard.Module.css'

function ProjectCard(){
    const { cursos, setData } = useContext(CursosContext);
   
    return(
        <div className={styles.container}>
            {
                cursos.map((e) => (
                  <>
                    {
                        e.Projetos.map((project) => (
                            <>
                                <img className={styles.image}src={project.imageSrc}  />
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <ul className={styles.skills}>
                                        {
                                            project.skills.map((e)=>{
                                                return <li className={styles.skill}>{e}</li>
                                            })
                                        }
                                </ul>
                                <div className={styles.links}>
                                    <a className={styles.link} href={project.demo}>Demo</a>
                                    <a className={styles.link} href={project.source}>Source</a>
                                </div>
                            </>
                        ))}
                    </>
              ))
              
            }
        </div>
    )
}

export default ProjectCard;