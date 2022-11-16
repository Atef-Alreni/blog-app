import Home from "./pages/Home/index.js";
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";
import Posts from "./pages/Posts/index.js";
import PostDetails from "./pages/PostDetails/index.js";
import CreatePost from "./pages/CreatePost/index.js";
import About from "./pages/About/index.js";
import Contact from "./pages/Contact/index.js";
import Discover from "./pages/Discover/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import OpenRoutes from "./utils/OpenRoutes.js";
import PrivateRoutes from "./utils/PrivateRoutes.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<OpenRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
