import '../styles/Footer.css'

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
                            <span>Home</span>
                            <span>Discover</span>
                            <span>Sing up</span>
                        </div>
                        <div className="hover mg-t">
                            <span>Login</span>
                            <span>About us</span>
                            <span>Contact us</span>
                        </div>
                    </div>
                </div>
                <span className="copyright">All Rights reserved. 2020 - 2021</span>
                <div className="about-us">
                    <h3>About us</h3>
                    <div className="hover mg-t">
                        <span>Who we are</span>
                        <span>Mission</span>
                        <span>Vision</span>
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
