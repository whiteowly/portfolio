import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import SplashScreen from './splash';
import Landing from './landing';
import NavBar from './NavBar'

function App() {
  const location = useLocation();
  const hideNav = ['/login', '/signup'];
  const showNav = !hideNav.includes(location.pathname);

  return (
    <>
      {showNav && <NavBar />}
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
