import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function Profile() {
    let navigate=useNavigate();
    let {username}= useParams();
    return (
        <div>
            this is the Profile page for {username}!
            <br />
            <button onClick={()=>{
                navigate("/about");
            }}>Go to about Page</button>
        </div>
    )
}

export default Profile
