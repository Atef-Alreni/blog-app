import SideNav from '../SideNav';
import '../../styles/announcementspage/Announcements.css';

function Announcements() {
    return (
        <div className="content-sidenav announcements-custom">
            <div className="announcements-title-info-container">
                <h1 className="general-title">Announcements</h1>
                <div className="announcements-items">
                    <div className="announcements-title-date">
                        <h3 className="announcements-title">Maintenece</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <span className="announcements-info">Shaun is following you</span>
                </div>
                <div className="announcements-items">
                    <div className="announcements-title-date">
                        <h3 className="announcements-title">Version 2.2</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <span className="announcements-info">Shaun liked your post</span>
                </div>
                <div className="announcements-items">
                    <div className="announcements-title-date">
                        <h3 className="announcements-title">Maintenece</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <span className="announcements-info">Shaun is following you</span>
                </div>
                <div className="announcements-items">
                    <div className="announcements-title-date">
                        <h3 className="announcements-title">Version 2.2</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <span className="announcements-info">Shaun liked your post</span>
                </div>
                <div className="announcements-items">
                    <div className="announcements-title-date">
                        <h3 className="announcements-title">Maintenece</h3>
                        <span className="date">14 April, 2021</span>
                    </div>
                    <span className="announcements-info">Shaun is following you</span>
                </div>
            </div>
            <SideNav />
        </div>
    );
}

export default Announcements;