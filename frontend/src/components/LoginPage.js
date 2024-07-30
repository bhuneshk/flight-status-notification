import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { messaging } from './firebase-config';
import { getToken } from 'firebase/messaging';

const LoginPage = ({ onLogin,username,setUserName }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, { username, password });
            const { token } = response.data;
            onLogin(token);
            const fcmToken = await getToken(messaging,{vapidKey:"BA6OGZ8CHd_IILbz2tQb9QAVGXSlSL-fNDXr1n7WlBUh8Q3W9AVImfT_zW7QEwElTM8ef2mgDYks1Ph1RIWYtiM"});
            if (fcmToken) {
                await axios.post(`http://localhost:5000/api/fcmtoken/save`, {
                    username,
                    fcmToken: fcmToken,
                });
            }

            navigate('/');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default LoginPage;
