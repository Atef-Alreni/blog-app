import '../../styles/postspage/Posts.css';
import SideNav from '../SideNav';
import { Link } from 'react-router-dom';

function Posts() {
    return (
        <div className="content-sidenav posts-custom">
            <div className="posts">
                <div className="post-container">
                    <div className="name-date-follow">
                        <div className="name-date">
                            <h3>Shaun Doe</h3>
                            <span>14 April, 2020</span>
                        </div>
                        <span className="follow">Follow</span>
                    </div>
                    <div className="avatar-title-text">
                        <div className="avatar"></div>
                        <div className="title-text">
                            <h4 className="title">The Constructs of mankind</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            </p>
                            <Link to="posts/1">View</Link>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="name-date-follow">
                        <div className="name-date">
                            <h3>Shaun Doe</h3>
                            <span>14 April, 2020</span>
                        </div>
                        <span className="follow">Follow</span>
                    </div>
                    <div className="avatar-title-text">
                        <div className="avatar"></div>
                        <div className="title-text">
                            <h4 className="title">The Constructs of mankind</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            </p>
                            <Link to="posts/2">View</Link>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="name-date-follow">
                        <div className="name-date">
                            <h3>Shaun Doe</h3>
                            <span>14 April, 2020</span>
                        </div>
                        <span className="follow">Follow</span>
                    </div>
                    <div className="avatar-title-text">
                        <div className="avatar"></div>
                        <div className="title-text">
                            <h4 className="title">The Constructs of mankind</h4>
                            <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            </p>
                            <Link to="posts/3">View</Link>
                        </div>
                    </div>
                </div>
            </div>
            <SideNav />
        </div>
    );
}

export default Posts;
