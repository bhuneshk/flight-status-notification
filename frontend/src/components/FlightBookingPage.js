import React, { useEffect, useState } from 'react';
import { getFlights, bookFlight } from '../api';

const FlightBookingPage = ({ token }) => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState('');

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await getFlights();
                setFlights(response.data);
            } catch (error) {
                console.error('Error fetching flights:', error);
            }
        };

        fetchFlights();
    }, []);

    const handleBookFlight = async () => {
        try {
            await bookFlight(selectedFlight, token);
            alert('Flight booked successfully!');
        } catch (error) {
            console.error('Error booking flight:', error);
        }
    };

    return (
        <div>
            <h1>Available Flights</h1>
            <select onChange={(e) => setSelectedFlight(e.target.value)} value={selectedFlight}>
                <option value="">Select a flight</option>
                {flights.map((flight) => (
                    <option key={flight.flightNumber} value={flight.flightNumber}>
                        {flight.source} to {flight.destination} - {flight.status}
                    </option>
                ))}
            </select>
            <button onClick={handleBookFlight}>Book Flight</button>
        </div>
    );
};

export default FlightBookingPage;
