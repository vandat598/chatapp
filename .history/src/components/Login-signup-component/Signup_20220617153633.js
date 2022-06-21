import React from 'react';

import Navbar from '../Navbar/Navbar.js';

function Signup() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="form-outermost">
                <h1>Signup</h1>
                <form className="form-inner">
                    <input
                        type="Email"
                        placeholder="Enter your email address"
                    />
                </form>
            </div>
        </React.Fragment>
    );
}

export default Signup;
