import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailCorrectionPage from './components/EmailCorrectionPage/EmailCorrectionPage';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import UserPage from './components/User/UserPage'
import Forum from './components/Forum/Forum';
const handleLoginSuccess = () => {
  // Your logic for a successful login
  console.log('Login successful. Redirecting or updating UI.');
};
function App() {
  return (
    <>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/emailCorrection" element={<EmailCorrectionPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
     </Router>
      </div>
      
    </>
  )
}

export default App
