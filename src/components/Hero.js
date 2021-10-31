import '../styles/Hero.css'

function Hero(){
    return (
        <div className="hero">
            <div className="text-btns">
                <h1>The Most Immersive Blogger App Ever</h1>
                <p>Blogger, a truly fantastic app which allows you to enjoy posting your knowledge and opinions for friends and family alike to view.</p>
                <div className="btns">
                    <a href="#">Sign up for free</a>
                    <a href="#">Learn more</a>
                </div>
            </div>
            <div className="rocket-illustration"></div>
            <div className="absolute bubble-s"></div>
            <div className="absolute bubble-m"></div>
            <div className="absolute bubble-l"></div>
            <div className="absolute bubble-xl"></div>
        </div>
    );
}

export default Hero;