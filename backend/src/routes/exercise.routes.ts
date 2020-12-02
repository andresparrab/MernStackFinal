import ExerciseController from "../controllers/Exercise.controller";
import { Application } from "express";

const routes = (app: Application): void => {
  console.log("This is inside soutes ExerciseController.js", app.mountpath);
  app.get("/exercises/", ExerciseController.ListExercises);
  app.post("/exercise/add", ExerciseController.addExercise);
  app.get("/exercise/:id", ExerciseController.getExercisebyID);
  app.delete("/exercise/:id", ExerciseController.deleteExercisebyID);
  app.put("/exercise/update/:id", ExerciseController.updateExercisebyID);
};

export default {
  routes,
};
