import React, { useState } from 'react'
import './InviteFriends.css'

const InviteFriends = () => {
  const [copied, setCopied] = useState(false)
  const inviteLink = 'https://lz.m2gvn.com/ref/10276'

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="invite-friends-section">
      <div className="invite-friends-main-box">
        <div className="invite-friends-title">Mời bạn bè và nhận thưởng</div>
        <div className="invite-friends-stats-row">
          <div className="invite-friends-stat-box">
            <div className="invite-friends-stat-label">Lời mời thành công</div>
            <div className="invite-friends-stat-value invite-friends-stat-value-blue">
              0
            </div>
          </div>
          <div className="invite-friends-stat-box">
            <div className="invite-friends-stat-label">Game Points đã nhận</div>
            <div className="invite-friends-stat-value invite-friends-stat-value-yellow">
              0 🪙
            </div>
          </div>
          <div className="invite-friends-stat-box">
            <div className="invite-friends-stat-label">
              Game Dollars đã nhận
            </div>
            <div className="invite-friends-stat-value invite-friends-stat-value-green">
              0 💵
            </div>
          </div>
        </div>
        <div className="invite-friends-link-row">
          <input
            className="invite-friends-link-input"
            value={inviteLink}
            readOnly
          />
          <button className="invite-friends-copy-btn" onClick={handleCopy}>
            {copied ? 'Đã copy!' : 'Copy Link'}
          </button>
        </div>
        <div className="invite-friends-link-desc">
          Chia sẻ link này với bạn bè để cả hai đều nhận được phần thưởng!
        </div>
        <div className="invite-friends-milestones">Mốc phần thưởng</div>
        <div className="invite-friends-howto-row">
          <div className="invite-friends-howto-box">
            <div className="invite-friends-howto-title">Cách mời bạn bè</div>
            <ol className="invite-friends-howto-list">
              <li>Copy Link giới thiệu của bạn</li>
              <li>Chia sẻ với bạn bè qua mạng xã hội, tin nhắn hoặc email</li>
              <li>Bạn bè đăng ký tài khoản thông qua Link của bạn</li>
              <li>Bạn bè xác nhận email & kích hoạt tài khoản</li>
              <li>Bạn nhận phần thưởng khi đạt mốc!</li>
            </ol>
          </div>
          <div className="invite-friends-howto-box invite-friends-howto-box-green">
            <div className="invite-friends-howto-title invite-friends-howto-title-green">
              Hệ thống phần thưởng
            </div>
            <ul className="invite-friends-howto-list">
              <li>
                Phần thưởng người mời (bạn): Nhận khi đạt đủ số lượng bạn bè mời
                thành công (1, 3, 5, 10, 20 bạn bè)
              </li>
              <li>
                Phần thưởng bạn bè: Bạn bè được mời sẽ tự động nhận phần thưởng
                ngay khi đăng ký thành công
              </li>
              <li>
                Lưu ý: Cả hai bên đều được hưởng lợi từ hệ thống giới thiệu!
              </li>
            </ul>
          </div>
        </div>
        <div className="invite-friends-history-title">Lịch sử giới thiệu</div>
        <div className="invite-friends-history-box">
          <div>
            Chưa có lời mời nào
            <br />
            Khi bạn mời bạn bè thành công, thông tin sẽ hiển thị tại đây
          </div>
        </div>
      </div>
    </div>
  )
}

export default InviteFriends
