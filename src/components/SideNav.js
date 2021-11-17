import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

function SideNav() {
    return (
        <div className="sidenav">
            <Link to="/announcements">Announcements</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    );
}

export default SideNav;