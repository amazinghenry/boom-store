import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const CreateMovieForm = () => {

    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newReleaseDate, setNewReleaseDate] = useState(0);
    const moviesCollectionRef = collection(db, "movies");
    const navigate = useNavigate();

    const submitMovie = async () => {
        try {
            await addDoc(moviesCollectionRef, { title: newMovieTitle, releaseDate: newReleaseDate });
            navigate('/'); // Redirect to the desired page after submitting the movie
        } catch (error) {
            console.error('Error submitting movie:', error);
        }
    };

    return (
        <div className="form-group">
            <h2>Create New Movie</h2>
            <form onSubmit={(e) => { e.preventDefault(); submitMovie(); }}>
                <label>Movie Title
                    <input
                        type="text"
                        value={newMovieTitle}
                        onChange={(e) => setNewMovieTitle(e.target.value)}
                    />
                </label>

                <label>Movie Release Date
                    <input
                        type="number"
                        value={newReleaseDate}
                        onChange={(e) => setNewReleaseDate(Number(e.target.value))}
                    />
                </label>

                <button type="submit">Submit Movie</button>
            </form>
        </div>
    );
};

export default CreateMovieForm;
