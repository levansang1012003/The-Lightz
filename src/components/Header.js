import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const COMMUNITY_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: 'fab fa-tiktok' },
  { name: 'Discord', url: 'https://discord.com', icon: 'fab fa-discord' },
]

function Header({ onLoginClick, isLoggedIn }) {
  const location = useLocation()
  const showHomeButton =
    location.pathname === '/privacy-policy' ||
    location.pathname === '/terms-of-service'
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showDropdown])

  return (
    <div className="header-bar">
      <div className="header-left">
        <div className="logo-glow">LZ</div>
        <span className="header-title">THE LIGHTZ</span>
      </div>
      <div className="header-right">
        {showHomeButton && (
          <Link to="/" className="header-home-btn">
            Trang chủ
          </Link>
        )}
        <div className="community-dropdown" ref={dropdownRef}>
          <button
            className="community-btn"
            onClick={() => setShowDropdown((v) => !v)}
          >
            CỘNG ĐỒNG <span className="arrow">▼</span>
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              {COMMUNITY_LINKS.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                  key={link.name}
                >
                  <i className={link.icon}></i> {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
        {!isLoggedIn && (
          <button className="login-btn-header" onClick={onLoginClick}>
            Đăng nhập
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
