import React from "react";
import {Switch, Router, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Pages/Home"
import Cursos1 from "./Pages/Cursos"
import CursosDetails from "./Pages/CursosDetails"


export const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cursos"  component={Cursos1} />
        </Switch>
      </BrowserRouter>
    );
  };
