import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData();

    const handle_delete = (user) => {
        const agree = window.confirm(`Are you sure you want to delete ${user.name}?`);
        if (agree) {
            console.log(`Deleting ${user.name}`);
        }
        console.log(user._id)
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('User deleted successfully');
                }
            })
    }

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user.name} {user.email} <button onClick={() => handle_delete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;