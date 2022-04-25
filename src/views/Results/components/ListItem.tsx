import { Image, Result, Title } from "../../../interfaces/movies";
import DefaultMovie from "../../../assets/default-movie.png";

type Props = {
  id: string;
  image?: Image;
  title?: Title;
  onListItemClick: (movie: string) => void;
};

function ListItem({ id, title, image, onListItemClick }: Props) {
  const handleListItemClick = () => {
    let name = "/title/";
    if (id.includes("name")) name = "/name/";
    onListItemClick(id.replace(name, "").replace("/", ""));
  };
  return (
    <div className="movie-item">
      <img src={image?.url ?? DefaultMovie} alt={title} className="movie-img" />
      <div className="movie-body">
        <h5>{title ?? "Sin Titulo"}</h5>
        <button className="movie-btn" onClick={handleListItemClick}>
          Ver mas
        </button>
      </div>
    </div>
  );
}

export default ListItem;
