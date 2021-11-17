import SideNav from "../SideNav";
import '../../styles/contactpage/Contact.css'

function Contact() {
    return (
        <div className="content-sidenav contact-custom">
            <div className="contact-title-icons-form">
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact-icons">
                    <div>
                        <div className="phone-icon bg-icon"></div>
                        <h4>Call us</h4>
                        <p>07554814898</p>
                    </div>
                    <div>
                        <div className="email-icon bg-icon"></div>
                        <h4>Email us</h4>
                        <p>atefwork12345@hotmail.com</p>
                    </div>
                    <div>
                        <div className="location-icon bg-icon"></div>
                        <h4>Vision</h4>
                        <p className="contact-address">44 new coronation street, AH15 5CD, County of New Michigan </p>
                    </div>
                </div>
                <span className="or">or</span>
                <form action="" method="post" className="contact-form">
                    <div className="credentials-message-container">
                        <div>
                            <div className="label-input-container">
                                <label for="name">Name</label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="label-input-container">
                                <label for="email">Email</label>  
                                <input type="text" id="email"/>
                            </div>
                        </div>
                        <div className="label-input-container">
                            <label for="message">Message</label>
                            <textarea id="message" style={{}}></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send" className="submit-msg-btn"/>
                </form>
            </div>
            <SideNav />
        </div>
    );
}

export default Contact;
