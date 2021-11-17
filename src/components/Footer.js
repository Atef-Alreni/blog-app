import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="contain-width">
                <div className="address">
                    <h3>Address</h3>
                    <span className="mg-t">44 new coronation street,
                        AH15 5CD, County of New Michigan</span>
                </div>
                <div className="sitemap">
                    <h3>Sitemap</h3>
                    <div className="sitemap-info">
                        <div className="hover mg-t">
                            <Link to="/">Home</Link>
                            <Link to="/discover">Discover</Link>
                            <Link to="/signup">Sign up</Link>
                        </div>
                        <div className="hover mg-t">
                            <Link to="/login">Login</Link>                            
                            <Link to="/about">About us</Link>                            
                            <Link to="/contact">Contact us</Link>                            
                        </div>
                    </div>
                </div>
                <span className="copyright">All Rights reserved. 2020 - 2021</span>
                <div className="about-us">
                    <h3>About us</h3>
                    <div className="hover mg-t">
                        <a href="/about#whoweare">Who we are</a>
                        <a href="/about#mission">Our mission</a>
                        <a href="/about#vision">Vision</a>
                    </div>
                </div>
                <div className="get-in-touch">
                    <h3>Get in touch</h3>
                    <div className="bg-imgs mg-t">
                        <div className="facebook bg-img"></div>
                        <div className="instagram bg-img"></div>
                        <div className="twitter bg-img"></div>
                        <div className="youtube bg-img"></div>
                        <div className="linkedin bg-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
