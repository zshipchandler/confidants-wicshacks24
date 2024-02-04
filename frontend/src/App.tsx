import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailInput from './components/EmailCorrection/EmailInput';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const handleLoginSuccess = () => {
  // Your logic for a successful login
  console.log('Login successful. Redirecting or updating UI.');
};

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/emailInput" element={<EmailInput />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
