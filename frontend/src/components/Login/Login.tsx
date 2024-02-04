import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

interface LoginProps {
   onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = () => {
    // Simulate a simple login check (replace with your actual login logic)
    if (username === 'Clara' && password === 'password') {
      // Call the onLoginSuccess callback if login is successful
      onLoginSuccess();

      // Redirect to another page upon successful login
      navigate('/landing'); // Adjust the route as needed
    } else {
      // Handle login failure (show error message, etc.)
      console.log('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className = "login-container-full">
    <div className="login-container">
       <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className = "button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default Login;

// ... (other imports)
// import "./Login.css";

// const Login: React.FC<any> = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleLogin = () => {
//     // Simulate a simple login check (replace with your actual login logic)
//     if (username === 'example' && password === 'password') {
//       // Call the onLoginSuccess callback if login is successful
//       onLoginSuccess();

//       // Redirect to another page upon successful login
//       navigate('/emailInput'); // Adjust the route as needed
//     } else {
//       // Handle login failure (show error message, etc.)
//       console.log('Login failed. Please check your credentials.');
//     }
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // ... (existing logic)
//   };

//   return (
//     <div className="login-container">
//       <Form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLogin();
//         }}
//       >
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Login;
