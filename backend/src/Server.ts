import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import Middlewares from "./middlewares/Middlewares";
import Configuration from "./configuration/configuration";
import userRoutes from "./routes/user.routes";
import exerciseRoutes from "./routes/exercise.routes";
import cors from "cors";
import path from "path";
// Boot express
const app: Application = express();
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });
//const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  console.log("This is PRODUCTION");
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  // app.get("*", (req, res) => {
  //   res.send("../frontend/build");
}

// Application requirements
app.use(helmet()); // Add security to the app
app.use(morgan("common")); //add logging to the app

Configuration.connectToPort(app);
// if (process.env.NODE_ENV === "production") {
//   console.log("This is PRODUCTION");
//   app.use(express.static(path.join(__dirname, "frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend/build"));
//   });
// } else {
//   console.log("THIS IS NOT A PRODUCTION!!!!!");
// }

// Start server
Configuration.connectToDatabase();

// Application routing
app.use("/recep", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello from Umeå Andres Parra THE BEST" });
});

userRoutes.routes(app); // this is for when we type /users in the browser it will load ./routes/users
exerciseRoutes.routes(app);
//This have to come after the  routing !important
app.use(Middlewares.notFound);
app.use(Middlewares.errHandler);

export default app;
