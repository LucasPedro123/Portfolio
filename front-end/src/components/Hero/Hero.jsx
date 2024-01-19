import React from 'react';
import styles from './Hero.module.css'

function Hero (){
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou Lucas Pedro!</h1>
                <p className={styles.description}>
                    Sou um desenvolvedor Fullstack com sólido conhecimentos em Node.js e React.js. Estudante de tecnologia e inovação, sempre em busca de habilidades e conhecimentos para criar soluções que impactem positivamente à sociedade.
                </p>
                <a  className={styles.contact} href="lucaspedrofernandes@gmail.com">Contato E-email</a>
            </div>
            <img className={styles.imageMy}src={require('../../Assets/Images/lucas.jpeg')} alt="" />
            <div className={styles.topBlur}/>

            <div className={styles.bottomBlur}/>

        </section>
    )
}

export default Hero;