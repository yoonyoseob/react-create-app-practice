import {useState,useEffect} from "react";
import Movie from "/Users/yoonyoseob/Desktop/dev/reactjs_nomadcoder_project/src/components/Movie.js"
function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
    const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
        useEffect(()=>{
        getMovies();
    },[]);
    console.log(movies);

    return (
    <div>
        {loading?(<h1>Loading...</h1>):(
        <div>
        {movies.map((movie)=> (<Movie covImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
          genres={movie.genres} //movie componenent에 props 보내기
        />))}
        </div>
    )}
    </div>
    )
}
export default Home;