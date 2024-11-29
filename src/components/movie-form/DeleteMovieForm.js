import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../config/firebase";

const DeleteMovieForm = () => {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate('/')
    }

    const handleDelete = async() => {
        try {
            const movieDoc = doc(db, 'movies', id )
            await deleteDoc()
        } catch (error) {
            
        }
    }

    return ( 
        <div>
            <div className="title">
            Are you sure you want to delete Movie?
            </div>
            <div className="dlete-button-group">
            <button onClick={handleCancel()}>cancel</button>
            <button onClick={handleDelete()}>Delete</button>
            </div>
        </div>
     );
}
 
export default DeleteMovieForm;