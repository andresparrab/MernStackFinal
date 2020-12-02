import StatusCode from "../configuration/StatusCode";
import * as express from "express";
import "mongoose";
import ExerciseModel from "../models/Exercise.model";

const ListExercises = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    console.log("Getting the exercies list......");
    const exercies = await ExerciseModel.find();
    res.status(StatusCode.OK).send(exercies);
    () => {
      res.json(exercies); // // this the response will be send as a json document
      console.log("This is inside the ListExercises -> res.json at endpoint /exercises/", exercies);
    };
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const addExercise = async (req: express.Request, res: express.Response): Promise<void> => {
  const exercise = new ExerciseModel({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });
  try {
    console.log("Waiting for user to save.............", exercise);
    const response = await exercise.save();
    console.log("User saved succesfuly");
    res.status(StatusCode.CREATED).send(response);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const getExercisebyID = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    console.log("Inside getExerciseByID..........");
    const response = await ExerciseModel.findById(req.params.id);
    console.log("GOT IT..exercise ID :  ", response);
    res.status(StatusCode.OK).send(response);
  } catch (error) {
    console.log("This is the Error");
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message: "Error occured whil trying to recieve exercise with id:",
      error: error.message,
    });
  }
};

const deleteExercisebyID = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    console.log("Inside deleteExercisebyID..........");
    const response = await ExerciseModel.findByIdAndDelete(req.params.id);
    console.log("Exercise deleted :  ", response);
    res.status(StatusCode.OK).send(response);
  } catch (error) {
    console.log("");
  }
};

const updateExercisebyID = async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    if (!req.body) {
      return res.status(StatusCode.BAD_REQUEST).send({ message: " Cannot update empty values" });
    }
    const exercise = await ExerciseModel.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
      },
      { new: true }
    );
    console.log("Inside updateExercisebyID..........");

    res.status(StatusCode.OK).send(exercise);
  } catch (error) {
    console.log("");
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
      message: "Error occured whil trying to update the values of the exercise with id: " + req.params.id,
      error: error.message,
    });
  }
};

export default {
  addExercise,
  ListExercises,
  getExercisebyID,
  deleteExercisebyID,
  updateExercisebyID,
};
