import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx"
import Newblog from "./pages/Newblog.jsx";
import Allblogs from "./pages/Allblogs.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/new" element={<Newblog/>} />
        <Route path="/all" element={<Allblogs/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
