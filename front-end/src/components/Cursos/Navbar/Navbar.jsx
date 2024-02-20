import React, {useState} from "react";
import styles from "./NavBar.module.css"
import {Link} from "react-router-dom"


function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className={styles.navbar}>
                <Link className={styles.title}to="/">Portfólio</Link>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src={ 
                            menuOpen 
                              ?  require('../../../Assets/Images/icons/marca-cruzada.png')
                              :  require('../../../Assets/Images/icons/menu-icon.png')
                        }
                        onClick={()=>{setMenuOpen(!menuOpen)}}
                    />

                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                    <li>
                            <Link to="/">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/">Skills</Link>
                        </li>
                        <li>
                            <Link to="/">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/cursos">Artigos</Link>
                        </li>
                        <li>
                            <Link to="/">Contato</Link>
                        </li>
                    </ul>
                </div>
             
            </nav>
        </>
    )
}

export default NavBar;