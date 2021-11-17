import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DiscoverPage from './pages/DiscoverPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route exact path='/posts' component={PostsPage} />
        <Route path='/posts/:id' component={PostPage} />
        <Route path='/announcements' component={AnnouncementsPage} />
        <Route path='/news' component={NewsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/discover' component={DiscoverPage} />
      </Switch>
    </Router>
  );
}

export default App;
