import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./app/routes";

createRoot(document.getElementById("root")!).render(<App />);
