import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDoc, doc } from 'firebase/firestore';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDocRef = doc(db, 'movies', id);
                const movieDocSnapshot = await getDoc(movieDocRef);
                // console.log(movieDocSnapshot)

                if (movieDocSnapshot.exists()) {
                    const movieData = { ...movieDocSnapshot.data(), id: movieDocSnapshot.id };
                    setMovie(movieData);
                    console.log(setMovie(movieData))
                } else {
                    console.log('Movie not found');
                }
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <>
            {movie ? (
                <div>
                    <h2>{movie.title}</h2>
                    <p>Released Date: {movie.releaseDate}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default MovieDetail;
