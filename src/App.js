import './App.css'
import React, { useState } from 'react'
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

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

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

  return (
    <Router>
      <div className="App">
        <Header onLoginClick={handleOpenLogin} />
        {showLoginModal && (
          <LoginForm
            onClose={handleCloseModals}
            onSwitchToRegister={handleOpenRegister}
          />
        )}
        {showRegisterModal && (
          <RegisterForm
            onClose={handleCloseModals}
            onSwitchToLogin={handleOpenLogin}
          />
        )}
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route
            path="/"
            element={
              <>
                <RegisterCard onClick={handleOpenRegister} />
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
