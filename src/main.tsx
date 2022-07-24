<<<<<<< HEAD
=======
import React from "react";
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
import { createRoot } from "react-dom/client";
import "./global.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

<<<<<<< HEAD
// React.StrictMode causes multiples render making the context call api multiples times

root.render(<App />);
=======
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
