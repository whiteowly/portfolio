import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import SplashScreen from './splash';
import Landing from './landing';

function App() {
  return (
    <>
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
