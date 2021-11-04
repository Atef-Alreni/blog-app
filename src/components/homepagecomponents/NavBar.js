import '../../styles/homepage/NavBar.css';

function NavBar() {
    return (
        <nav>
            <h1 className="logo">BlogApp</h1>
            <div className="right-nav-cont">
                <ul>
                    <li className="list-items">
                        <a href="#">Home</a>
                        <a href="#">Discover</a>
                        <a href="#">Login</a>
                        <a href="#">Signup</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="line-container">
                    <div className="line half-line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;