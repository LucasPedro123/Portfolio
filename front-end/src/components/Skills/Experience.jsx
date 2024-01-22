import { useContext } from "react";
import  {CursosContext} from "../../Context/CarrinhoContexto";
import styles from './Experience.module.css'

function Experience() {
  const { cursos, setData } = useContext(CursosContext);
  console.log(cursos)

  
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {
            cursos.map((item) => (
                <div className={styles.skills}>
                  {item.Skills.map((e) => (
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={e.imageSrc} className={styles.skillImage}alt="" />
                        </div>
                        <p>{e.tittle}</p>
                    </div>
                  ))}
                </div>
              ))
              
        }
      </div>
      <ul className={styles.history}>
            <h2 className={styles.title}>Certificação</h2>
        <li className={styles.historyItem}>
            <img src="https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className={styles.historyItemDetails}>
                <h3>Microsoft Certified: Azure Fundamentals</h3>
                <p>Emissão do certificado: 07/12/23</p>
            </div>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
