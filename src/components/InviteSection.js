import React from 'react'
import './InviteSection.css'

function InviteSection({ onLogin }) {
  return (
    <section className="invite-section">
      <div className="invite-title">Mời bạn bè tham gia</div>
      <div className="invite-card">
        <div className="invite-card-title">Mời bạn bè và nhận thưởng</div>
        <div className="invite-card-desc">
          Mời bạn bè đăng ký trước và cả hai đều nhận phần thưởng đặc biệt!
        </div>
        <div className="invite-inner-box">
          <div className="invite-inner-text">
            Đăng nhập để nhận link giới thiệu và bắt đầu mời bạn bè nhận thưởng!
          </div>
          <button className="invite-login-btn" onClick={onLogin}>
            Đăng nhập ngay
          </button>
        </div>
      </div>
    </section>
  )
}

export default InviteSection
