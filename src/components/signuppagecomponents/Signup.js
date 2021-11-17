import '../../styles/signuppage/Signup.css';
import SideNav from '../SideNav';

function Signup() {
    return (
        <div className="content-sidenav signup-custom">
            <form action="" method="get" className="signup-form">
                <h1>Join Today</h1>
                <div className="form-components">
                    <div className="names-container">   
                        <div className="firstname-container">
                            <label>Firstname</label>
                            <input type="text" name="" id="" className="name"/>
                        </div>
                        <div className="surname-container">
                            <label>Surname</label>
                            <input type="text" name="" id="" className="name"/>
                        </div>
                    </div>
                    <div className="email-container">   
                        <label>Email</label>
                        <input type="text" name="" id="" className="email"/>
                    </div>
                    <div className="username-container">   
                        <label>Username</label>
                        <input type="text" name="" id="" className="username"/>
                    </div>
                    <div className="password-container">
                        <label>Password</label>
                        <input type="password" name="" id="" className="password"/>
                    </div>
                    <div className="confirm-password-container">
                        <label>Confirm Password</label>
                        <input type="password" name="" id="" className="confirm-password"/>
                    </div>
                    <input type="button" value="Signup" className="login-btn"/>
                </div>
                <span className="login-text">Already have an account? <a href="">Login</a></span>
            </form>
            <SideNav />
        </div>
    )
}

export default Signup;
