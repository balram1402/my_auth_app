
import React from 'react';
import Login from './Components/loginbutton';
import Logout from './Components/Logoutbutton';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';


export default function App(){
    const { isLoading } = useAuth0();
    if(isLoading) return <h2>Loading...</h2>
    return(

        <>
            <center>
                <Login/>
                <Logout/>
                <Profile/>
            </center>
        </>
    )
}