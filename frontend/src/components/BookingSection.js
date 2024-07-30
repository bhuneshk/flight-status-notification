import React, { useState } from 'react';
import axios from 'axios';

const BookingSection = ({ flight, username, source, destination }) => {
    const [bookingStatus, setBookingStatus] = useState('');
    
    const handleBookFlight = async () => {
        try {
            const flightNumber=flight.flightNumber;
            await axios.post(`http://localhost:5000/api/flights/book`, { flightNumber, username, source, destination });
            setBookingStatus('Booking successful');
        } catch (error) {
            setBookingStatus('Booking failed');
        }
    };

    return (
        <div>
            <h2>Booking Section</h2>
            <p>Flight Number: {flight.flightNumber}</p>
            <p>Fare: ${flight.fare}</p>
            <p>Gate Number: {flight.gateNumber || 'N/A'}</p>
            <button onClick={handleBookFlight}>Book Now</button>
            {bookingStatus && <p>{bookingStatus}</p>}
        </div>
    );
};

export default BookingSection;
