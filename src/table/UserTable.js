import React from 'react';


const UserTable = (props)=> (
    <div class="table-responsive"> 
        <table class="table-striped table-hover">
            <thead>
            <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length >0 ? (props.users.map((user)=>(
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
            <button class="btn btn-primary" onClick={() => {props.editRow(user)}}>Edit</button>
            <button class="btn btn-danger" onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
            </tr>
            ))):(<tr>
                <td>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    )


export default UserTable
