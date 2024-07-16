import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import DashBoard from './admin/Dashboard/Dashboardjs';
import Login from './admin/Login/Loginjs';
import Home from './admin/Home/Home';
import BlogList from './admin/BlogList/BlogList'; // Import for admin BlogList
import AddNewBlog from './admin/AddBlog/AddNewBlog';
import AddCategory from './admin/AddCategory/AddCategory';
import CommentList from './admin/CommentList/CommentList';
import CategoryList from './admin/CategoryList/CategoryList';
import { isLogin } from './checkAuth';
import UserLayout from './user/UserLayout';
import Userhome from './user/HomeUser/Userhome';
import About from './user/AboutUser/About';
import Contact from './user/Contact/Contact';

// Ensure this is imported correctly for User's BlogList if needed
// import UserBlogList from './user/BlogList/BlogList'; 
import UserLogin from './user/UserLogin/UserLogin';





const router = createBrowserRouter([
  {
    path: '',
    element: <UserLayout />,
    children: [
      { path: '', element: <Userhome /> }, // Corrected 'UserHome' to 'Userhome'
      { path: 'home', element: <Userhome /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      // If you have a separate BlogList for users, use UserBlogList
      { path: 'blog', element: <BlogList /> },// Ensure correct BlogList
      // { path: 'blog', element: <UserBlogList /> } // Use if needed
      {path:'login',element:<UserLogin/>}


    ]
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard',
        loader: isLogin,
        element: <DashBoard />,
        children: [
          { path: '', element: <Home /> },
          { path: 'blog-list', element: <BlogList /> },
          { path: 'add-blog', element: <AddNewBlog key="add-blog" mode="add-blog" /> },
          // Removed duplicate route for 'add-blog'
          { path: 'category-list', element: <CategoryList /> },
          { path: 'addcategory', element: <AddCategory key="add" mode="add" /> },
          { path: 'comment', element: <CommentList /> },
          { path: 'edit-category', element: <AddCategory key="edit" mode="edit" /> },
          { path: 'edit-blog', element: <AddNewBlog key="edit-blog" mode="edit-blog" /> }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
