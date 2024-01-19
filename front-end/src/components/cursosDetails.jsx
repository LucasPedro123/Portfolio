import { useContext } from "react";
import {CursosContext} from "../Context/CarrinhoContexto";

//                              ROTAS PARÂMETRIZADAS      

export const ProductDetails = (props)=>{

    const {cursos, setData} = useContext(CursosContext);
    const id = props.match.params.id;

    const Cursos = cursos.find(e => e.id == id) 
    console.log(Cursos)
    return(
        <section className="productDetails">
            { Cursos &&
                <div>
                    <h1>{Cursos.curso}</h1>
                    <img className="imgPhone" height="300px" src={Cursos.logo} alt={Cursos.curso} />
                    <h5>{Cursos.conclusão}</h5>

                    <p>{Cursos.descricao}</p>
                                                   
                </div>
            }
            { !Cursos &&
                <div>
                    <h1>dd</h1>
                </div>
            }


        </section>
    )

}
