import React from "react";
import styles from "./About.module.css"


function About(){
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img 
                    src={require('../../Assets/Images/blockchain32.png')} 
                    alt="" 
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Front-end Developer</h3>
                            <p>
                                Experiência em construção de sites responsivos e otimizados, em React.js
                            </p>
                        </div>
                        <img className={styles.aboutItemImg} src={require('../../Assets/Images/cursor.png')} alt="" />
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Back-end Developer</h3>
                            <p>
                                Tenho experiência em desenvolvimento de APIsRest, em Node.js.
                            </p>
                        </div>
                        <img className={styles.aboutItemImg} src={require('../../Assets/Images/base-de-dados.png')} alt="" />
                    </li>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemsText}>
                            <h3>Blockchain</h3>
                            <p>
                                Já projetei aplicações de Smart Contracts e NFTs com alto nível de segurança, na rede Blockchain utilizando Solidity. 
                            </p>
                        </div>
                        <img className={styles.aboutItemImg}src={require('../../Assets/Images/cursor.png')} alt="" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;