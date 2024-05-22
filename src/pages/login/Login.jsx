import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post("https://fakestoreapi.com/auth/login", {
                username: username,
                password: password
            });

            // If login successful, set token and redirect to homepage
            window.localStorage.setItem("token", response.data.token);
            window.location.href = "/"; // Redirect to homepage

        } catch (error) {
            // If login fails, display error message
            if (error.response.status === 401) {
                setError("Invalid username or password. Please try again.");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    }

    return (
      <>
      {/* <Navbar/> */}
       
    <div className='ForBg'>
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="content">
                    <div className="input-field">
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Username"
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <a href="#" className="link">Forgot Your Password?</a>
                </div>
                <div className="action">
                    <button type="submit">Login</button>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
}

export default Login;
