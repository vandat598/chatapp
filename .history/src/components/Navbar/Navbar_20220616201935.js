import mainLogo from '../assets/html.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="left">
                    <img src={mainLogo} alt="logo" />
                </div>
                <div>
                    <NavLink to="/">
                        <button>Login</button>
                    </NavLink>
                    <NavLink to="/signup">
                        <button>Signup</button>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
