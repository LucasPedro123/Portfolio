import React, { useContext } from "react";
import { CursosContext } from "../../Context/CarrinhoContexto";
import NavBar from "./Navbar/Navbar";

import styles from "./Curso.module.css"

const CursoDetails = (props) => {

    return (
        <>
            <NavBar />
            <section className={styles.container}>
                <div className={styles.topBlur}/>
                <div  className={styles.productDetails}>
                    <h1>  EM ÉPOCA DE GLOBALIZAÇÃO, O CONHECIMENTO ACADÊMICO É INDISPENSÁVEL: ENTENDA O POR QUE.</h1>
                    <img src="https://www.wallpapertip.com/wmimgs/237-2376655_blockchain-wallpaper.jpg" width="100%" />
                    <h3><strong>  Resumo: o impacto da globalização na sociedade contemporânea, aufere uma rápida disseminação de informações e interconexões entre culturas, mas que poderá gerar alguns prejuízos. </strong></h3>
                    <p>  Hoje o atual mundo da era-digital, vive em um contexto impulsionado pela globalização. Esse fenômeno globalizado de informações, interconexões e ausência de fronteiras entre culturas, pode caracterizar um aumento de conhecimento muito rápido e mudanças no padrão de vida das pessoas, sendo necessário desenvolvimento de habilidades para usufruir dos ganhos tecnológicos. Na década de 90, quando o cientista, físico e professor britânico Tim Berners-Lee desenvolveu o browser (navegador) ou Word Wide Web (Rede Mundial de Computadores) a aproximação entre pessoas, culturas e informações se tornou uma realidade.</p>
                    <p>  O mundo vem ganhando, com o tempo, brutalmente produtividade: aumento da oferta por bens de consumo e aumento da oferta por bens de capital - que é a produção para bens de consumo - alavancando, assim, a qualidade de vida da sociedade através da mecanização dos processos industriais. Em face disso, diminui a mão-de-obra para determinados setores, no entanto, aumenta para outros setores responsáveis pelo gerenciamento da automação de insumos industriais. Como no caso do advento da IA (Inteligência Artificial), utilizando um sistema visão computacional de inspeção contínua de produtos para detecção de anomalias, sem a necessidade da detecção manual. Deste modo, o trabalho humano pode ser dirimido, mas pode necessitar de profissionais qualificados para o ingresso dessas novas propensões em áreas industriais.</p>    
                    <p>  Contudo, muitas vezes as pessoas não acompanham o volume desmesurado de conhecimentos e habilidades ou não possuem acesso à recentes bens de consumo gerada pelas novas tendências tecnológicas. Nesses cenários, as pessoas ficam retrasadas e pode, até mesmo, dificultar a adaptação nessa época digital, como o exemplo do vovozinho que é dependente para mexer no celular, ausência de conhecimento, ou alto custo para acessar os itens tecnológicos, perda do poder de compra.</p>
                    <p>  Tendo em vista esses aspectos, para esquivar dessas problemáticas, é essencial a instância máxima da nação, o governo, investir na formação acadêmica das pessoas a fim de acompanhar os novos padrões tecnológicos, por outro lado, a redução do poder aquisitivo deve-se ao fato da diluição da moeda, sendo vital a autoridade incumbida controlar a inflação. Dessa forma, o conhecimento e o potencial de cada indivíduo podem ser alcançados e o acesso a bens para materiais para população realizado.</p>
                    <h3>Autor: Lucas Pedro</h3>
                </div>
                <div className={styles.bottomBlur}/>
            </section>
        </>
    );
};

export default CursoDetails;
