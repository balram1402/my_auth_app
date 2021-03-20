import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
    const { user , isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? <h2>Hello, {user.name} <br/>
            You are Logged In Now!</h2> : <h2> Logged Out</h2>}
        </div>
    )
}
