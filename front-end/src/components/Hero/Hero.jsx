import React from 'react';
import styles from './Hero.module.css'

function Hero (){
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}><span>Olá, eu sou Lucas!</span></h1>
                <h3 className={styles.textAnimate}><span>Bem-vindo ao meu Web site!</span></h3>
                <p className={styles.description}>
                    Estudante de tecnologia e inovação, sempre em busca de habilidades e conhecimentos para criar soluções que impactem positivamente à sociedade.
                </p>
                <a  className={styles.contact} href="mailto:lucaspedrofernandes@gmail.com">Contato E-mail</a>
            </div>
                <img className={styles.imageMy}src={require('../../Assets/Images/lucas.jpeg')} alt="" />
            <div className={styles.topBlur}/>

            <div className={styles.bottomBlur}/>

        </section>
    )
}

export default Hero;