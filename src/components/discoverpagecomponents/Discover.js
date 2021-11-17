import SideNav from '../SideNav';
import '../../styles/discoverpage/Discover.css';
import { Link } from 'react-router-dom';
import girlImg from '../../images/Girl.png';
import planetImg from '../../images/Planet.png';

function Discover() {
    return (
        <div className="content-sidenav discover-custom">
            <div className="discover-container">
                <h1 className="discover-title">Discover</h1>
                <div className="immersive">
                    <img src={ girlImg } alt="" className="discover-girl-img"/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.</p>
                </div>
                <div className="worldwide">
                    <img src={ planetImg } alt="" className="discover-planet-img" />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no fdg.ea rebum. 
                        Stet clita kasd gubergren, no fdg.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                        gubergren, no fdg.ea rebum. Stet clita kasd gubergren, no fdg.</p>
                </div>
                <div className="center-redirect-btn">
                    <Link to="/signup" className="discover-signup-redirect-btn">Sign up for free</Link>
                </div>
            </div>
            <SideNav />
        </div>
    );
}

export default Discover;
