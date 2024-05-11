import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NotFound404 from "./NotFound404";
import Competitions from "./Competions";
import data from "./competitions.json";
import CompetitionsDetails from "./CompetitionsDetails";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/competition"
          element={<Competitions competitions={data.Competitions} />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/DetailsCompetition/:id"
          element={<CompetitionsDetails />}
        />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
