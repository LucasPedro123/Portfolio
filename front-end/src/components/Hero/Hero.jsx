import React from 'react';
import styles from './Hero.module.css'

function Hero (){
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}><span>Olá, eu sou Lucas Pedro!</span></h1>
                <h3 className={styles.textAnimate}><code>Bem-vindo ao meu site!</code></h3>
                <p className={styles.description}>
                Como um profissional e estudante de tecnologia, estou aqui para oferecer uma combinação única de habilidades e experiências que podem impulsionar o sucesso do seu negócio ou da sua equipe.
                </p>
                <a  className={styles.contact} href="mailto:lucaspedrofernandes@gmail.com">Contato E-mail</a>
            </div>
                <img className={styles.imageMy}src={require('../../Assets/Images/lucas.jpeg')} alt="" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
            <div className={styles.bottomBlur2}/>
        </section>
    )
}

export default Hero;