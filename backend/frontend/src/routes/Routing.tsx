import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExercisesList } from "../components/exercisesList.component";
import { editExercise } from "../components/editExercise.component";
import createExercise from "../components/createExercise.component";
import { createUser } from "../components/createUser.component";
import RoutingPaths from "./RoutingPaths";

export const Routing = (props: any): JSX.Element => {
  return (
    <Router>
      {props.children}
      <Route exact path={RoutingPaths.homeView} component={ExercisesList} />
      <Route path={RoutingPaths.editView} exact component={editExercise} />
      <Route path={RoutingPaths.createExercise} exact component={createExercise} />
      <Route path={RoutingPaths.createUser} exact component={createUser} />
    </Router>
  );
};
