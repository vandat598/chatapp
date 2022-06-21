import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar.js';

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [dob, setDob] = useState();
    const [profilepic, setProfilepic] = useState();

    return (
        <React.Fragment>
            <Navbar />
            <div className="form-outermost">
                <h1>Signup</h1>
                <form className="form-inner">
                    <input
                        type="Email"
                        placeholder="Enter your email address"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="data"
                        onChange={e => setDob(e.target.value)}
                        placeholder="Choose Date of Birth"
                    />
                    <input
                        type="file"
                        accept="image/png, image/jpg, image/gif, image/jpeg"
                        onChange={e => setProfilepic(e.target.value)}
                        placeholder="Choose a Profile Picture"
                    />
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Choose a password"
                    />
                </form>
            </div>
        </React.Fragment>
    );
}

export default Signup;
