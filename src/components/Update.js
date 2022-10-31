import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const stored_user = useLoaderData();
    const [user, setUsers] = React.useState(stored_user);

    const handle_update_submit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User updated successfully');
                    event.target.reset();
                }
            })
        console.log(user);
    }

    const handle_input_change = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        const new_users = { ...user };
        new_users[field] = value;
        setUsers(new_users);
    }

    return (
        <div>
            <h2>plese update user: {stored_user.name}</h2>
            <form onSubmit={handle_update_submit}>
                <input onChange={handle_input_change} type="text" name='name' defaultValue={stored_user.name} /><br required />
                <input onChange={handle_input_change} type="text" name='address' defaultValue={stored_user.address} /><br required />
                <input onChange={handle_input_change} type="email" name='email' defaultValue={stored_user.email} /><br required />
                <button type='submit'>Update user</button>
            </form>
        </div>
    );
};

export default Update;