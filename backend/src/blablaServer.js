"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var Middlewares_1 = __importDefault(require("./middlewares/Middlewares"));
var configuration_1 = __importDefault(require("./configuration/configuration"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var exercise_routes_1 = __importDefault(require("./routes/exercise.routes"));
var cors_1 = __importDefault(require("cors"));
// Boot express
var app = express_1["default"]();
//const port = process.env.PORT || 5000;
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(cors_1["default"]());
app.use(express_1["default"].json());
// Application requirements
app.use(helmet_1["default"]()); // Add security to the app
app.use(morgan_1["default"]("common")); //add logging to the app
// Application routing
app.use("/recep", function (req, res, next) {
  res.status(200).send({ data: "Hello from Umeå Andres Parra THE BEST" });
});
if (process.env.NODE_ENV === "production") {
  app.use(express_1["default"].static("frontend/build"));
}
user_routes_1["default"].routes(app); // this is for when we type /users in the browser it will load ./routes/users
exercise_routes_1["default"].routes(app);
//This have to come after the  routing !important
app.use(Middlewares_1["default"].notFound);
app.use(Middlewares_1["default"].errHandler);
// Start server
configuration_1["default"].connectToDatabase();
configuration_1["default"].connectToPort(app);
exports["default"] = app;
