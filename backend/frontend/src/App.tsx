import React from "react";
import { Routing } from "./routes/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/shared/navbar.component";

function App(): JSX.Element {
  console.log("Inside REACT APP");
  return (
    <Routing>
      <div className="container">
        <Navbar />
      </div>
    </Routing>
  );
}

export default App;
