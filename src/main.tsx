import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initAnalytics } from "./lib/analytics.ts";
import "./styles/index.css";

initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
