import {React, useContext} from "react";
import  {CursosContext} from "../../Context/CarrinhoContexto";
import styles from './Project.module.css'

function Projects () {
    
    const { cursos, setData } = useContext(CursosContext);

    return (
        <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.projects}>
          {cursos.map((curso) => (
            <div key={curso.id} className={styles.projects}>
              {curso.Projetos.map((item) => (
                <div key={item.title} className={styles.container2}>
                  <img
                    src={item.imageSrc}
                    alt={`Image of ${item.title}`}
                    className={styles.image}
                  />
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                  <ul className={styles.skills}>
                    {item.skills.map((skill, index) => (
                      <li key={index} className={styles.skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    {item.demo && (
                      <a href={item.demo} className={styles.link}>
                        Demo
                      </a>
                    )}
                    {item.source && (
                      <a href={item.source} className={styles.link}>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
}
export default Projects;