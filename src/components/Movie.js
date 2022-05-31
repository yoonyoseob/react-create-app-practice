import propTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({covImg, title,summary,genres}){
    return(
        <div>
        <img src={covImg} alt={title}/>
            <h2>
                <Link to="/movie"></Link>
                </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                  <li key={genre}>
                    {genre}
                  </li>
                ))}
            </ul>
        </div>
        
    );
}
Movie.propTypes = {
    covImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string) //propTypes모듈을 이용해서 각 props의 형식 설정
}
export default Movie;