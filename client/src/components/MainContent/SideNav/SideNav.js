import "./styles.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className='sidenav'>
      <Link to='/posts'>Posts</Link>
      <Link to='/createpost'>Create Post</Link>
      <Link to='/about'>About us</Link>
      <Link to='/contact'>Contact us</Link>
    </div>
  );
}

export default SideNav;
