import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRePasswordChange = (e) => setRePassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        if (password !== rePassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // API endpoint URL
        const url = 'http://localhost/api/register';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, gender, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                navigate('/login')
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Registration failed');
                console.error('Registration failed:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred during registration. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-6">Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={handleGenderChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="re-password">
                            Re-enter Password
                        </label>
                        <input
                            id="re-password"
                            type="password"
                            placeholder="Re-enter Password"
                            value={rePassword}
                            onChange={handleRePasswordChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            REGISTER
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <a href="/" className="text-blue-500 hover:text-blue-700">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
