import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from "./App";
import './index.css'
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))
import { StrictMode } from "react";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)