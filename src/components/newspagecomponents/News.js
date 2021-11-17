import SideNav from '../SideNav';
import '../../styles/newspage/News.css';

function News() {
    return (
        <div className="content-sidenav news-custom">
            <div className="news-title-avatar-info-container">
                <h1 className="general-title">News</h1>
                <div className="news-items">
                    <div className="news-title-date">
                        <h3 className="news-title">Shaun Doe</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <div className="news-avatar-info">
                        <div className="news-avatar"></div>
                        <span className="news-info">Shaun is following you</span>
                    </div>
                </div>
                <div className="news-items">
                    <div className="news-title-date">
                        <h3 className="news-title">Shaun Doe</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <div className="news-avatar-info">
                        <div className="news-avatar"></div>
                        <span className="news-info">Shaun liked your post</span>
                    </div>
                </div>
                <div className="news-items">
                    <div className="news-title-date">
                        <h3 className="news-title">Shaun Doe</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <div className="news-avatar-info">
                        <div className="news-avatar"></div>
                        <span className="news-info">Shaun liked your post</span>
                    </div>
                </div>
                <div className="news-items">
                    <div className="news-title-date">
                        <h3 className="news-title">Shaun Doe</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <div className="news-avatar-info">
                        <div className="news-avatar"></div>
                        <span className="news-info">Shaun liked your post</span>
                    </div>
                </div>
                <div className="news-items">
                    <div className="news-title-date">
                        <h3 className="news-title">Shaun Doe</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <div className="news-avatar-info">
                        <div className="news-avatar"></div>
                        <span className="news-info">Shaun liked your post</span>
                    </div>
                </div>
            </div>
            <SideNav />
        </div>
    );
}

export default News;
