import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate("/home");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <input className="border p-2" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <input className="border p-2" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button className="bg-blue-500 text-white p-2" type="submit">Login</button>
                {error && <div className="text-red-500">{error}</div>}
            </form>
        </div>
    );
};

export default Login;