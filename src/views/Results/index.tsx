import { useNavigate, useParams } from "react-router-dom";

import Chairs from "../../assets/movie-theater.png";
import "./style.css";

import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "./components/Loading";
import List from "./components/List";
import { Result } from "../../interfaces/movies";

function Results() {
  const { title } = useParams();
  const navigate = useNavigate();
  const {
    data: movies,
    error,
    isSuccess,
    isLoading,
    isFetching,
  } = useFetchMoviesQuery(title!);

  const handleListItemClick = (movie: string) => {
    navigate(`/details/${movie}`);
  };

  const renderContent = () => {
    if (error) {
      // return <div>{error.error}</div>;
      return <div>Ha ocurrido un error</div>;
    } else if (isLoading || isFetching) {
      return <Loading />;
    } else if (isSuccess && movies.results) {
      return <List data={movies} onListItemClick={handleListItemClick} />;
    } else if (isSuccess && !movies.results) {
      return <p>No se encontraron resultados</p>;
    }
  };
  return (
    <div className="results">
      <div className="results-container">
        {/* {(isLoading || isFetching) && <Loading />}
        {isSuccess && movies.results && <List data={movies} />}
        {isSuccess && !movies.results && <p>No se encontraron resultados</p>} */}
        {renderContent()}
      </div>
      <div className="img-container">
        <img src={Chairs} alt="cinema chairs" />
      </div>
    </div>
  );
}

export default Results;
