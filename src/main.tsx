import { createRoot } from "react-dom/client";
import "./global.css";

import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

// React.StrictMode causes multiples render making the context call api multiples times

root.render(<App />);
