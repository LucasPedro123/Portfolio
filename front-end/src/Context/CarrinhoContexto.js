import {createContext, useState, useEffect} from "react";


const CursosContext = createContext();

function CursosContextProvider( props ){
    
    const [cursos, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
          try {
            const url = 'http://localhost:8080/';
            const response = await fetch(url, {
              method: 'GET',
            });
    
            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
              throw new Error('Falha na solicitação da API');
            }
    
            // Agora, você pode usar diretamente `response.json()` para obter o JSON
            const objJson = await response.json();
            console.log(cursos)
            setData(objJson);
          } catch (error) {
            console.error('Erro na solicitação da API:', error.message);
          }
        };
        
        fetchApi();
      }, []);
    
      console.log(cursos)
    return(
        <CursosContext.Provider value={{cursos, setData}}>
          {props.children}
        </CursosContext.Provider>
    )
}
export {CursosContext, CursosContextProvider}