import MovieCollection from "../movie-list/MovieList";

const Home = () => {
    return ( 
        <div className="text-center my-5 home">
            <h1 className="">List of Movies and Released Year</h1>
            <MovieCollection />
        </div>
    );
}
 
export default Home;