// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
