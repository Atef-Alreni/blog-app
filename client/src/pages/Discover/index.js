import MainContent from "../../components/MainContent/MainContent.js";
import { Link } from "react-router-dom";

import "./styles.css";
import girlImg from "../../assets/Girl.png";
import planetImg from "../../assets/Planet.png";

function Discover() {
  const pContentFirst =
    "Lorem, ipsum dolor abo accusanti oloremque oloremque elit. elit. elit molestias officia consequunt eofficia consequunt elit litlitlitlit. Similique aliquid, molestias officia consequunt elit. Similique aliquid, molestias officia consequunt elit. Similique aliquid, molestias officia consequunt elit. Similique aliquid, molestias officia consequunt elit. Similique aliquid, molestias officia consequunt elit. Similique aliquid, molestias officia consequunt elit. Similique onsequuntsintLorem, lique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sint aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sint Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sintLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusa.";

  const pContentSecond =
    "Lorem ipsum sicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sintLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sint Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sintLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid, molestias officia consequuntur praesentium pariatur explicabo accusantium culpa cumque laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sint laudantium! Iusto, ratione. Ullam repudiandae id excepturi, eius eveniet doloremque sint dolermque sint a.";

  return (
    <MainContent title='Discover'>
      <div className='immersive'>
        <img src={girlImg} alt='' className='discover-girl-img' />
        <small>{pContentFirst}</small>
      </div>
      <div className='worldwide'>
        <img src={planetImg} alt='' className='discover-planet-img' />
        <small>{pContentSecond}</small>
      </div>
      <div className='center-btns'>
        <Link to='/register' className='signup-btn'>
          Sign up for free
        </Link>
        <Link to='/login' className='login-btn'>
          Log in
        </Link>
      </div>
    </MainContent>
  );
}

export default Discover;
