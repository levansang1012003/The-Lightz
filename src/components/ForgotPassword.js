import React, { useState } from 'react'
import './ForgotPassword.css'

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    // Giả lập gửi email, bạn thay bằng API thực tế
    setTimeout(() => {
      if (email.includes('@')) {
        setSuccess(true)
      } else {
        setError('Email không hợp lệ!')
      }
      setLoading(false)
    }, 1200)
  }

  return (
    <div className="forgotpw-modal-overlay">
      <div className="forgotpw-modal">
        <button className="forgotpw-close" onClick={onClose}>
          ×
        </button>
        <div className="forgotpw-title">Đặt lại mật khẩu</div>
        <div className="forgotpw-desc">
          Nhập email đã đăng ký để nhận link đặt lại mật khẩu.
        </div>
        <form className="forgotpw-form" onSubmit={handleSubmit}>
          <label className="forgotpw-label">Email *</label>
          <input
            className="forgotpw-input"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading || success}
            required
          />
          {error && <div className="forgotpw-error">{error}</div>}
          {success && (
            <div className="forgotpw-success">
              Đã gửi email đặt lại mật khẩu!
            </div>
          )}
          <button
            className="forgotpw-btn forgotpw-btn-main"
            type="submit"
            disabled={loading || success}
          >
            {loading ? 'Đang gửi...' : 'Gửi email đặt lại'}
          </button>
          <button
            className="forgotpw-btn forgotpw-btn-cancel"
            type="button"
            onClick={onClose}
            disabled={loading}
          >
            Hủy
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
