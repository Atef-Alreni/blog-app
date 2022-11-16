import { useRef } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Burger() {
  const burgerNav = useRef();

  const toggle = () => {
    burgerNav.current.classList.toggle("slide-in");
  };

  return (
    <>
      <button className='line-container' onClick={toggle}>
        <div className='line half-line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
      <div className='burger-nav' ref={burgerNav}>
        <Link onClick={toggle} to='/'>
          Home
        </Link>
        <Link onClick={toggle} to='/discover'>
          Discover
        </Link>
        <Link onClick={toggle} to='/about'>
          About
        </Link>
        <Link onClick={toggle} to='/register'>
          Register
        </Link>
        <Link onClick={toggle} to='/login'>
          Login
        </Link>
      </div>
    </>
  );
}

export default Burger;
