import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CanvasStateProvider from "./context/canvas";

ReactDOM.render(
  <CanvasStateProvider>
    <App />
  </CanvasStateProvider>,
  document.getElementById("root")
);
