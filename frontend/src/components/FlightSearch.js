import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = ({ onSelectFlight,source, setSource ,destination, setDestination }) => {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/flights/search`, {
                params: { source, destination }
            });
            setFlights(response.data);
            setError('');
        } catch (error) {
            setError('Failed to fetch flights');
        }
    };

    const handleSelectFlight = (flight) => {
        onSelectFlight(flight);
    };

    return (
        <div>
            <h1>Search Flights</h1>
            <div>
                <label htmlFor="source">Source:</label>
                <input
                    type="text"
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="destination">Destination:</label>
                <input
                    type="text"
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <button onClick={handleSearch}>Search</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <ul>
                {flights.map(flight => (
                    <li key={flight._id}>
                        Flight Number: {flight.flightNumber}, Fare: ${flight.fare}, Gate: {flight.gateNumber || 'N/A'}
                        <button onClick={() => handleSelectFlight(flight)}>Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightSearch;
