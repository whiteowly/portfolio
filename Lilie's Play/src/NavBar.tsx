import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './navbar.css'

export default function NavBar() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try {
      if (dark) document.body.classList.add('dark-mode'); else document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
  }, [dark])

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">Lilie's Play</Link>
        </div>
        <nav className="links">
          <Link to="/Landing">Home</Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </nav>
        <div className="nav-actions">
          <button
            className="nav-theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}
