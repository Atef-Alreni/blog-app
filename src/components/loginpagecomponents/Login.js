import '../../styles/loginpage/Login.css';

function Login() {
    return (
        <div className="login-container">
            <form action="" method="get">
                <h1>Come Back</h1>
                <div>
                    <div className="username-container">   
                        <label>Username</label>
                        <input type="text" name="" id="" className="username"/>
                    </div>
                    <div className="password-container">
                        <div>
                            <label>password</label>
                            <a href=""></a>
                        </div>
                        <input type="password" name="" id="" className="password"/>
                    </div>
                </div>
            </form>
            <div>
                <a href="">Announcements</a>
                <a href="">News</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>
        </div>
    )
}

export default Login;
