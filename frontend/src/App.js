import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FlightSearch from './components/FlightSearch';
import BookingSection from './components/BookingSection';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Logout from './components/Logout';

function App() {
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [username,setUserName]=useState("");
    const [source,setSource]=useState("");
    const [destination,setDestination]=useState("");

    const handleLogin = (token) => {
        localStorage.setItem('authToken', token);
        setToken(token);
    };

    const handleRegister = (token) => {
        localStorage.setItem('authToken', token);
        setToken(token);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setToken(null);
    };

    const handleSelectFlight = (flight) => {
        setSelectedFlight(flight);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} username={username} setUserName={setUserName}/>} />
                <Route path="/register" element={<RegistrationPage onRegister={handleRegister} />} />
                <Route path="/" element={token ? (
                    <>
                        <Logout onLogout={handleLogout} />
                        <FlightSearch onSelectFlight={handleSelectFlight} source={source} setSource={setSource} destination={destination} setDestination={setDestination}/>
                        {selectedFlight && <BookingSection flight={selectedFlight} username={username} source={source} destination={destination}/>}
                    </>
                ) : (
                    <Navigate to="/login" />
                )} />
            </Routes>
        </Router>
    );
}

export default App;
