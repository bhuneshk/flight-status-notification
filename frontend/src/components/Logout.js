import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication token from localStorage
        localStorage.removeItem('authToken');
        onLogout();

        // Redirect to login page
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
