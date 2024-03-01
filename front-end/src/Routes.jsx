import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Suspense, lazy} from "react";

import Home from "./Pages/Home"
import Cursos1 from "./Pages/Cursos"
import CursoDetails from "./Pages/CursosDetails"

// const Home = lazy(()=> import("./Pages/Home"));
// const Cursos1 = lazy(()=> import("./Pages/Cursos"));
// const CursoDetails = lazy(()=> import("./Pages/CursosDetails"));

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
