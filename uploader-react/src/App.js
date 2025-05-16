import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import FileUploader from './components/FileUploader';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/uploader" element={ <ProtectedRoute><FileUploader /></ProtectedRoute> } />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
