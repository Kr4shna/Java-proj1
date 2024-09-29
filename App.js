// src/App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import BusRoutes from './components/BusRoutes'; // Ensure this component exists
import DriverProfile from './components/DriverProfile'; // Ensure this component exists
import Login from './components/Login';
import MainMenu from './components/MainMenu'; // Ensure this component exists
import Notifications from './components/Notifications'; // Ensure this component exists
import StudentProfile from './components/StudentProfile'; // Ensure this component exists

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    return (
        <Router>
            <div className="App">
                <h1>SRM Bus Routing System</h1>

                {!isLoggedIn ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <>
                        <MainMenu />
                        <Routes>
                            <Route path="/bus-routes" element={<BusRoutes />} />
                            <Route path="/driver-profile" element={<DriverProfile />} />
                            <Route path="/student-profile" element={<StudentProfile />} />
                            <Route path="/notifications" element={<Notifications />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
