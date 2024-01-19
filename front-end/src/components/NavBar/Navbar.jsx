import React, {useState} from "react";
import styles from "./NavBar.module.css"

import {getImageUrl} from '../../Service/utils'

function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className={styles.navbar}>
                <a className={styles.title}href="/">Portfolio</a>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src={ 
                            menuOpen 
                              ?  require('../../Assets/Images/botao-fechar.png')
                              :  require('../../Assets/Images/menu-aberto.png')
                        }
                        onClick={()=>{setMenuOpen(!menuOpen)}}
                    />

                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                        <li>
                            <a href="#About">Sobre</a>
                        </li>
                        <li>
                            <a href="#experience">Cursos</a>
                        </li>
                        <li>
                            <a href="#projects">Projetos</a>
                        </li>
                        <li>
                            <a href="#contacts">Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;