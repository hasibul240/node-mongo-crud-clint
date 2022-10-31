import React from 'react';

const AddUser = () => {

    const [user, setUsers] = React.useState({});

    const handle_submit = (event) => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }

    const handle_input_blur = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        const new_users = { ...user };
        new_users[field] = value;
        setUsers(new_users);
    }

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handle_submit}>
                <input onBlur={handle_input_blur} type="text" name='name' placeholder="Enter your name" /><br required />
                <input onBlur={handle_input_blur} type="text" name='address' placeholder="Enter your Address" /><br required />
                <input onBlur={handle_input_blur} type="email" name='email' placeholder="Enter your email" /><br required />
                <button type='submit'>Add user</button>
            </form>
        </div>
    );
};

export default AddUser;