import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import Avatar from "react-avatar";

import "./styles.css";
import Burger from "./Burger/Burger";

function NavBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.clear();
    setUser(null);

    history("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  return (
    <nav className='nav'>
      <div className='container-l'>
        <h1 className='logo'>BlogApp</h1>
        <div className='right-nav-container'>
          {user ? (
            <div className='login-nav-items'>
              <Avatar name={user.name} className='user-avatar' />
              <h3 className='user-name'>{user?.name}</h3>
              <button className='logout-btn' onClick={logOut}>
                Log out
              </button>
            </div>
          ) : (
            <>
              <div className='list-items'>
                <Link to='/'>Home</Link>
                <Link to='/discover'>Discover</Link>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
              </div>
              <Burger />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
