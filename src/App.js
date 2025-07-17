import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import RegisterCard from './components/RegisterCard'
import RewardSection from './components/RewardSection'
import InviteSection from './components/InviteSection'
import FeatureSlider from './components/FeatureSlider'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PrivacyPolicy from './components/PrivacyPolicy'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showForgot, setShowForgot] = useState(false)
  const [registeredCount, setRegisteredCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/player/count')
      .then(res => res.json())
      .then(data => setRegisteredCount(data.count || 0))
      .catch(() => setRegisteredCount(0));
    // Nếu đang ở dashboard thì coi như đã đăng nhập
    if (window.location.pathname.startsWith('/dashboard')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenLogin = () => {
    setShowRegisterModal(false)
    setShowLoginModal(true)
  }
  const handleOpenRegister = () => {
    setShowLoginModal(false)
    setShowRegisterModal(true)
  }
  const handleCloseModals = () => {
    setShowLoginModal(false)
    setShowRegisterModal(false)
  }

  // Thêm hàm xử lý đăng nhập
  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(true);
        window.location.href = '/dashboard';
      } else {
        alert(data.error || 'Đăng nhập thất bại');
      }
    } catch (err) {
      alert('Lỗi kết nối server');
    }
  };

  return (
    <Router>
      <div className="App">
        <Header onLoginClick={handleOpenLogin} isLoggedIn={isLoggedIn} />
        {showForgot ? (
          <ForgotPassword onClose={() => setShowForgot(false)} />
        ) : (
          <>
            {showLoginModal && (
              <LoginForm
                onClose={handleCloseModals}
                onSwitchToRegister={handleOpenRegister}
                onForgotPassword={() => setShowForgot(true)}
                onLogin={handleLogin}
              />
            )}
            {showRegisterModal && (
              <RegisterForm
                onClose={handleCloseModals}
                onSwitchToLogin={handleOpenLogin}
              />
            )}
          </>
        )}
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route
            path="/"
            element={
              <>
                <RegisterCard onClick={handleOpenRegister} registeredCount={registeredCount} />
                <RewardSection />
                <InviteSection onLogin={handleOpenLogin} />
                <FeatureSlider />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
