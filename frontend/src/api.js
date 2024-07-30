import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getFlights = () => axios.get(`${API_URL}/flights`);
export const bookFlight = (flightNumber, token) => axios.post(`${API_URL}/flights/book`, { flightNumber, userId: 'your_user_id' }, { headers: { Authorization: `Bearer ${token}` } });
export const login = (username, password) => axios.post(`${API_URL}/auth/login`, { username, password });
