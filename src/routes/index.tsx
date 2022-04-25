import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Movie from "../views/Movie";
import Results from "../views/Results";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:title" element={<Results />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
