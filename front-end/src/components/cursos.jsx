import {useContext, useEffect} from "react";
import {CursosContext} from "../Context/CarrinhoContexto";
import {Link,} from "react-router-dom"
// 1. Importando scss - ou a estilização - do Store. 


export const Curso = ()=>{

    const {cursos, setData} = useContext(CursosContext);

    return (
        <>
                <section className="card">
                    <div className="card-body">
                        { cursos &&
                            cursos.map((e)=>{
                                return (
                                    <div className="products" key ={e.id}>
                                       
                                        <Link to={`/description/${e.id}`}>
                                            <img  className="imgPhone" height="60px" src={e.logo} alt={e.curso} />
                                        </Link>
                                        <h5>Curso: {e.curso}</h5>

                                          
                                            
                                                <Link style={{width:"100%", top:"50px"}}to={`/description/${e.id}`}> 
                                                    <button
                                                        type="button" 
                                                        className="btn btn-primary"
                                                    >
                                                        <strong>Saiba mais</strong>
                                                    </button>
                                                </Link>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </section>

        </>
        
    )
}

export default Curso;
