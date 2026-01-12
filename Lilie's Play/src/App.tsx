import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Login from './login'

import NavBar from './NavBar'

function App() {
  const location = useLocation();
  const hideNav = ['/login', '/signup'];
  const showNav = !hideNav.includes(location.pathname);

  return (
    <>
      {showNav && <NavBar />}
      <Routes>
        
       
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </>
  )
}

export default App
