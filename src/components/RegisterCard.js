import React, { useEffect, useState } from 'react'
import './RegisterCard.css'

function getCountdown(targetDate) {
  const now = new Date()
  const diff = targetDate - now
  if (diff <= 0) return '0d 0h 0m 0s'
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

// Số người đăng ký sẽ lấy từ props
const BETA_DATE = new Date('2025-07-15T00:00:00')
const OFFICIAL_DATE = new Date('2025-07-30T00:00:00')

function RegisterCard({ onClick, registeredCount = 0 }) {
  const [countdown, setCountdown] = useState(getCountdown(BETA_DATE))

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(BETA_DATE))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="register-card">
      <div className="register-title">Đăng ký trước</div>
      <div className="register-count">{registeredCount}</div>
      <div className="register-desc">người đã đăng ký</div>
      <div className="register-label">Thời gian còn lại đến Closed Beta:</div>
      <div className="register-countdown">{countdown}</div>
      <div className="register-date">Closed Beta sẽ mở vào 15/07/2025</div>
      <div className="register-roadmap">
        <div className="roadmap-title">Lộ trình ra mắt</div>
        <div className="roadmap-row">
          <span>Closed Beta:</span> <span>15/07/2025</span>
        </div>
        <div className="roadmap-row">
          <span>Ra mắt chính thức:</span> <span>30/07/2025</span>
        </div>
        <div className="roadmap-note">
          * Closed Beta sẽ reset dữ liệu sau thời gian test
        </div>
      </div>
      <button className="register-btn-main" onClick={onClick}>
        Đăng ký ngay để nhận thưởng
      </button>
    </div>
  )
}

export default RegisterCard
