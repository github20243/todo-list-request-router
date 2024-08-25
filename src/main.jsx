import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./api/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
