import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Cursos1 from "./Pages/Cursos";
import CursoDetails from "./Pages/CursosDetails";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artigos" exact component={Cursos1} />
                <Route path="/artigos/:id" component={CursoDetails} />
            </Switch>
        </BrowserRouter>
    );
};
