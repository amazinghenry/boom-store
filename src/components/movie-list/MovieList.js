import './movie-collection.css';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([]);
    const moviesCollectionRef = collection(db, "movies");
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          const auth = getAuth();
    
          if (user) {
            // User is signed in
            setIsUserSignedIn(true);
          } else {
            // User is signed out
            setIsUserSignedIn(false);
          }
        });
    
        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
      }, []);

    useEffect(() => {
        const getMovieList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setMovieList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();
    }, []);

    return (
        <div>
            {movieList.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id = {movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate} // Corrected the typo in variable name
                />
            ))}
            {isUserSignedIn ? (<Link to='/addmovie'>Add New Movie</Link>) : (<Link to='/signin'>Sign in to Add Movie</Link>)}
            
        </div>
    );
};

export default MovieList;


