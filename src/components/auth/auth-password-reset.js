import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [passMessage, setPassMessage] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleReset = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            // Password reset email sent!
            setPassMessage('Password reset email sent')
            

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
        }
    };

    return (
        <div>
            <form onSubmit={handleReset}>
                <label>Email Address
                    <input
                        className='form-control'
                        type="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        required
                    />
                </label>
                <button type="submit">Reset Password</button>
            </form>
            <div>{ passMessage }</div>
        </div>
    );
};

export default PasswordReset;
