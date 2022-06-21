import mainLogo from '../assets/html.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="left">
                    <img src={mainLogo} alt="logo" />
                </div>
                <div>
                    <NavLink to="/">Login</NavLink>
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
