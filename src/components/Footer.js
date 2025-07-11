import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2025 Published by DavidLee Gaming w Btcheats | </span>
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
        <span> | </span>
        <a href="/privacy-policy" className="footer-link">
          Terms of Service
        </a>
      </div>
    </footer>
  )
}

export default Footer
