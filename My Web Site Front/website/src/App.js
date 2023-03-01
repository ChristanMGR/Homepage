
import './App.css';
import Landingpage from './Componants/landingpage';
import Projects from './Pages/Projects';
import Footer from './Componants/Footer';
import Navbar from './Componants/navbar';
import Home from './Pages/Home';
import SingleBlogShow from './Pages/SingleBlogShow';
import PostBlogList from './Pages/postblog';
import SingleBlogEdit from './Pages/SingleBlogEdit';
import ProjectsList from './Pages/ProjectsList';
import MyLogIn from './Pages/MyLogIn';

import {
  Routes,
  Route,
} from "react-router-dom";
import BlogList from './Pages/BlogList';

function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
       
        <Route path="/" element={ <Landingpage/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/blog" element={ <BlogList/> } />
        <Route path="/mypost" element={ <PostBlogList/> } />
        <Route path="/blog/:id/" element={ <SingleBlogShow/> } />


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
