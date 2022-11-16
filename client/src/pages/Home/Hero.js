import { Link } from "react-router-dom";

import rocket from "../../assets/Home/rocket-illustration.svg";
import bubblesS from "../../assets/bubbles/small.svg";
import bubblesM from "../../assets/bubbles/medium.svg";
import bubblesL from "../../assets/bubbles/large.svg";
import bubblesXL from "../../assets/bubbles/x-large.svg";

function Hero() {
  return (
    <div className='hero'>
      <div className='text-btns'>
        <h1>The Most Immersive Blogger App Ever</h1>
        <p>
          Blogger, a truly fantastic app which allows you to enjoy posting your
          knowledge and opinions for friends and family alike to view.
        </p>
        <div className='btns'>
          <Link to='/register'>Sign up for free</Link>
          <a href='#learn-more'>Learn more</a>
        </div>
      </div>
      <img src={rocket} alt='' className='rocket-illustration' />
      <img className='bubble bubble-s' src={bubblesS} alt='' />
      <img className='bubble bubble-m' src={bubblesM} alt='' />
      <img className='bubble bubble-l' src={bubblesL} alt='' />
      <img className='bubble bubble-xl' src={bubblesXL} alt='' />
    </div>
  );
}

export default Hero;
