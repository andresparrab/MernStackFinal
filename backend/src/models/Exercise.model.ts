import moongose from "mongoose";

const Schema = moongose.Schema;

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const ExerciseModel = moongose.model("Exercise", exerciseSchema);

export default ExerciseModel;
