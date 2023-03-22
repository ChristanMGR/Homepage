
import './App.css';
import Projects from './Pages/Projects';
import Footer from './Componants/Footer';
import Navbar from './Componants/navbar';
import Home from './Pages/Home';
import SingleBlogShow from './Pages/SingleBlogShow';
import PostBlogList from './Pages/postblog';

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
       
        <Route path="/" element={ <Home/> } />
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
