// src/pages/Dashboard.tsx
import React from 'react';
import LineChart from '../components/Dashboard/LineChart';
import Map from '../components/Dashboard/Map';
import { Link } from 'react-router-dom';

// Functional Component for Dashboard
const Dashboard: React.FC = () => {

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <Link to="/contacts">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add Contact
                    </button>
                </Link>
            </div>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">COVID-19 Dashboard</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Global Cases Over Time</h2>
                    <LineChart />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Global Cases by Country</h2>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Dashboard; // exporting Dashboard
