import React, { useState } from 'react'
import './LoginForm.css'

function LoginForm({
  onClose = () => {},
  onSwitchToRegister = () => {},
  onLogin = () => {},
  onLoginWithGoogle = () => {},
  onForgotPassword = () => {},
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <div id="loginModal" className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          &times;
        </button>
        <div className="modal-header">
          <h2 className="modal-title">Đăng nhập</h2>
          <p className="text-gray-400">Chào mừng trở lại!</p>
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email hoặc Tên đăng nhập *</label>
            <input
              type="text"
              className="form-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Mật khẩu *</label>
            <input
              type="password"
              className="form-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem' }}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            Chưa có tài khoản? Đăng ký
          </button>
        </form>
        <div className="separator">
          <hr className="separator-line" />
          <span className="separator-text">hoặc</span>
          <hr className="separator-line" />
        </div>
        <div className="mb-4">
          <button
            onClick={onLoginWithGoogle}
            className="btn btn-secondary google-btn"
          >
            <span className="google-icon">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </span>
            <span>Đăng nhập với Google</span>
          </button>
        </div>
        <p className="text-center forgot-block">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sky-400 forgot-link"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            Quên mật khẩu?
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
