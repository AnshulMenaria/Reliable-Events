import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirection
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons
import "./Admin-Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reliable-events.onrender.com/api/adminlogin', { email, password });
            const { token, admin } = response.data; // Make sure to destructure admin object

            // Store the token and admin details in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('adminId', admin.id); // Save the admin ID
            localStorage.setItem('user', JSON.stringify(admin)); // Save the admin object without password

            setMessage("Login successful!");
            navigate('/adminpanel'); // Redirect to the admin panel
        } catch (error) {
            setMessage(error.response ? error.response.data.error : "Server error");
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-container">
                    <FaLock className="input-icon" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default Login;
