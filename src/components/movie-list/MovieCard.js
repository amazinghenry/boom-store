import { Link } from "react-router-dom";
import { generateSlug } from '../../utils';

const MovieCard = (props) => {
    const { title, id, releaseDate } = props;
    return (
        <Link to={`/movie/${id}/${generateSlug(title)}`} className="movie-item" key={id}>
            <div>
                <div>{title}, {releaseDate}</div>
            </div>
        </Link>
    );
}

export default MovieCard;
