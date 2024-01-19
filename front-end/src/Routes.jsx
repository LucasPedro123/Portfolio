import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import {CursosContextProvider} from "./Context/CarrinhoContexto";


export const Routes = ()=>{
    return (
        <>
            
            <Switch>
                
                <CursosContextProvider>
                   
                </CursosContextProvider>

            </Switch>
        </>

        
    )
}
