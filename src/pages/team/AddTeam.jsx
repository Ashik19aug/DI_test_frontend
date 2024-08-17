import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const AddTeam = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API endpoint URL
        const url = 'http://localhost/api/add-team';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                const data = await response.json();
                navigate("/teams");
            } else {
                const errorData = await response.json();
                console.error('failed:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-4">Welcome, Please Login</h1>
                    </div>
                    <form >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
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

                        <div className="flex items-center justify-between">
                            <button
                               onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            >
                                Add
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddTeam;