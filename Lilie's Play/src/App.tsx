import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import SplashScreen from './splash';

function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>Lilie's Play</h1>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
