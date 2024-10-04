import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Blog } from './pages/Blog';
import { Landing } from './pages/landing';
import { Blogs } from './pages/Blogs';
import { useEffect } from 'react';
import { WriteBlogs } from './pages/WriteBlogs';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

function MainRoutes() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/blogs');
    } else {
      navigate('/');
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/" element={<Landing />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/WriteBlogs" element={<WriteBlogs />} />
    </Routes>
  );
}

export default App;
