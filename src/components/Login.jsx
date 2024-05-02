import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful:', data);
      if (data.data.isAdmin==="true"){
        navigate("/admin")
      }else{
        navigate('/home');
      }
      
      // Redirect or update state as needed after successful login
    } else {
      console.error('Login failed:', response.statusText);
      // Handle login failure (display error message, etc.)
    }
  };

  return (
    <div>
      <h1>Welcome to the login page</h1>
      <label>Username: </label>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password: </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <a href="/signup">Create New Account</a>
    </div>
  );
}

export default Login;
