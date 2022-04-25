import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import Chairs from "../../assets/chairs.png";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleCleanClick = () => {
    setSearch("");
  };

  const handleSearchClick = () => {
    navigate(`/results/${search.trim()}`);
  };
  return (
    <div className="home">
      <div className="img-container">
        <img src={Chairs} alt="cinema chairs" />
      </div>
      <div className="search-container">
        <h1>Busca tu pelicula</h1>
        <input type="text" value={search} onChange={handleSearchChange} />
        <div className="btn-container">
          <button className="primary" onClick={handleSearchClick}>
            Buscar
          </button>
          <button className="accent" onClick={handleCleanClick}>
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
