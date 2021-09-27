import { useState } from 'react';
import axios from 'axios';

const projectID = '0a1eae23-6c95-4680-bf4b-8a5067d82b5a';

const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
        setError('');

    } catch (err) {
      setError('Incorrect Login.');

    }

  };

    return (
        <div className="wrapper">
            <div className="form">
                 <h1 className="title">OSER</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username (use 'test')" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password (use 'test')" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Log In</span>
                        </button>
                    </div>
                </form>
                <div className="Error">
                    <h1>{error}</h1>
                </div>
            </div>
        </div>

  );
};

export default Modal;