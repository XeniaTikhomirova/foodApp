import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

//dotenv.config();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
