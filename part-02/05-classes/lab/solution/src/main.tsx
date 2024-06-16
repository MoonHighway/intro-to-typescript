import { createRoot } from "react-dom/client";
import { App } from "./components/App.js";

const $app = document.getElementById("app");

if (!$app) {
  throw new Error("No app element");
}

const root = createRoot($app);
root.render(<App />);
