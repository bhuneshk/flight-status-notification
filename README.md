This project provides a comprehensive system for real-time flight status updates and notifications. The system allows passengers to book flights, receive updates, and be notified of any changes. It includes both frontend and backend components and utilizes Firebase for push notifications.

Features
Real-time Updates: Display current flight status including delays, cancellations, and gate changes.
Push Notifications: Send notifications for flight status changes via Firebase Cloud Messaging.
Integration with Airport Systems: Pull data from mock airport databases for accurate information.
User Authentication: Enable users to register, log in, and book flights.
Flight Booking: Allow users to book flights and receive updates specific to their booked flights.
Technologies Used
Frontend: React.js, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Notifications: Firebase Cloud Messaging
Project Structure
Backend
Models

User.js: Stores user information including username and password.
FCMToken.js: Stores Firebase Cloud Messaging (FCM) tokens associated with usernames.
Flight.js: Stores flight information including flight number, source, destination, gate number, status, and fare.
Routes

auth.js: Handles user registration and login.
flight.js: Manages flight data including booking flights and updating flight status.
fcmToken.js: Saves and retrieves FCM tokens.
Server Configuration

index.js: Entry point for the backend server, initializes routes, and connects to the database.
Frontend
Components

LoginPage.js: Handles user login.
RegisterPage.js: Handles user registration.
BookingSection.js: Allows users to book flights.
FlightList.js: Displays available flights for booking.
MyBookings.js: Shows the user's booked flights and updates.
Routing

Uses react-router-dom for navigating between different pages.
Firebase Configuration

Initializes Firebase to use Firebase Cloud Messaging for push notifications.