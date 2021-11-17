import '../../styles/homepage/Hero.css';
import rocket from '../../images/rocket-illustration.svg';
import { Link } from 'react-router-dom';

function Hero(){
    return (
        <div className="hero">
            <div className="text-btns">
                <h1>The Most Immersive Blogger App Ever</h1>
                <p>Blogger, a truly fantastic app which allows you to enjoy posting your knowledge and opinions for friends and family alike to view.</p>
                <div className="btns">
                    <Link to="/signup">Sign up for free</Link>
                    <a href="#learnmore">Learn more</a>
                </div>
            </div>
            <img src={ rocket } alt="" className="rocket-illustration"/>
            <div className="absolute bubble-s"></div>
            <div className="absolute bubble-m"></div>
            <div className="absolute bubble-l"></div>
            <div className="absolute bubble-xl"></div>
        </div>
    );
}

export default Hero;