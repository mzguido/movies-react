import { MoviesResponse, Result } from "../../../interfaces/movies";

import ListItem from "./ListItem";

// En el curso creo que se manda directamente data.results
type Props = {
  data: MoviesResponse | undefined;
  onListItemClick: (movie: string) => void;
};

function List({ data, onListItemClick }: Props) {
  return (
    <div className="list">
      {data?.results.map((movie) => (
        <ListItem {...movie} key={movie.id} onListItemClick={onListItemClick} />
      ))}
    </div>
  );
}

export default List;
