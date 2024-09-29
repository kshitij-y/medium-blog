import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Signin} from './pages/Signin';
// import { Signup} from './pages/Signup';
import { Blog} from './pages/Blog';
import { Landing } from './pages/landing';
import { Blogs } from './pages/Blogs'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup"     element={ <Signup /> } />
          <Route path="/signin"     element={ <Signin />} /> */}
          <Route path="/blog/:id"   element={ <Blog /> } />
          <Route path="/"           element={ <Landing /> } />
          <Route path="/blogs"      element={ <Blogs /> } />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
