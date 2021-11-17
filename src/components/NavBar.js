import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className="nav">
            <h1 className="logo">BlogApp</h1>
            <div className="right-nav-cont">
                <div className="list-items">
                    <Link to="/">Home</Link>    
                    <Link to="/discover">Discover</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
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