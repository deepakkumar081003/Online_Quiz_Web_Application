import { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Signup successful:', data);
      setMessage('Signup successful!');
    } else {
      const data = await response.json();
      setMessage(data.message || 'Signup failed!');
    }
  };

  return (
    <div>
      <h1>Welcome to the Signup Page</h1>
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
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <a href="/">Login to Account</a>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
