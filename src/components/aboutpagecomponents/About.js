import SideNav from '../SideNav';
import '../../styles/aboutpage/About.css';

function About() {
    return (
        <div className="content-sidenav about-custom">
            <div className="about-title-text">
                <h1 className="about-title">About Us</h1>
                <div className="about-text">
                    <div id="whoweare">
                        <h3>Who we are</h3>
                        <p>We are a non-profit organisation, which aims to deliver the best possible experience to when engaged in our 
                            services. We prioritise and ensure your joy and comfort is a reality, rather than, imaginary. Ok, in actuality 
                            I am a young individual who has just fathomed this app as a method of learning, prospering and proof of competence. 
                        </p>
                    </div>
                    <div id="ourmission">
                        <h3>Our mission</h3>
                        <p>Our mission and sole purpose is to produce, maintain and ensure you are within a state of full, utter joy and 
                            happiness when engaged in our apps and services we want.. we will make this a universal, undeniable, unmatchable 
                            truth, thus making our purpose gracefully met and allowing us to finally find respite. Sorry, again another 
                            exaggeration; I am simply, once more, a youth on a mission to ensure my claims are truthful, rather than, 
                            falsehood, as is why this project has been comprehended. </p>
                    </div>
                    <div id="vision">
                        <h3>Vision</h3>
                        <p>Our visage, to witness a world, a reality where no one has to wonder where they can display and kindly, 
                            eloquently and satisfyingly share their knowledge and wit with the world: dawn the blogger app, a truly 
                            immersive app where all one's thoughts can be clearly released. Simply, create an account, and begin posting, 
                            it's that elementary. </p>
                    </div>
                </div>
            </div>
            <SideNav />
        </div>
    );
}

export default About;