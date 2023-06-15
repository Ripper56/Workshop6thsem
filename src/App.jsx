
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './User/Home/Home'
import ResponsiveAppBar, { UserLayout } from './User/UserLayout'
import Aboutus from './User/About us/Aboutus'
import Contactus from './User/Contact us/Contactus'
import Blogs from './User/Blogs/Blogs'
import SingleBlogs from './User/Blogs/SingleBlogs'
import Adminlayout from './Admin/Layout'
import Adminhome from './Admin/Adminhome/Adminhome'
import AddBlog from './Admin/Blog/AddBlog'
import EditBlog from './Admin/Blog/EditBlog'
import Login from './Auth/Login'

const App = () => {
  return (
    <> {/*user layout start*/}
      <Router>
        <Routes> 
          <Route path="/login" element={<Login/>}></Route>
          <Route path="" element={<UserLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<Aboutus/>}/>
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/blog/:id"element={<SingleBlogs/>}/>
            <Route path="/contactus" element={<Contactus/>}/>

              {/*user layout ends*/}
          </Route>
           {/*admin layout*/}
          <Route path="/admin/" element={<Adminlayout/>}>
            <Route path="" element={<Adminhome/>}/>
            <Route path="add" element={<AddBlog />}/>
            <Route path="edit/:id" element={<EditBlog/>}/>
          </Route>
           {/*admin layout end*/}
        </Routes>
      </Router>
    
     

     

    </>
  );
}

export default App;
