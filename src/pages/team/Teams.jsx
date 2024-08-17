import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Teams = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetchTeamsData();
    }, []);
    const fetchTeamsData = async () => {
        const url = 'http://localhost/api/teams';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: '',
            });

            if (response.ok) {
                const data = await response.json();
                setTeams(data?.data);
            } else {
                const errorData = await response.json();
                console.error('Failed :', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <div className="flex justify-around">
                <h1>Team List</h1>
                <button onClick={navigate('add-team')} className="btn">Add Team</button>
            </div>

            <table className="table-auto">
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{team.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teams;