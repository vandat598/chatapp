import mainLogo from '../assets/html.png';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="left">
                    <img src={mainLogo} alt="logo" />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
