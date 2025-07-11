import React, { useState, useRef, useEffect } from 'react'
import './RewardSection.css'

const rewards = [
  {
    img: '/goi_default.png',
    name: 'Gói Tân Thủ',
    people: '100 người',
    status: 'Đã mở',
    statusType: 'open',
    alt: 'Gói Tân Thủ',
    locked: false,
    detail: {
      rewards: [
        { label: '50,000', icon: '💵', desc: '' },
        { label: '500', icon: '🪙', desc: '' },
        { label: '1 × Skin Đèn Pin Police', icon: '🔦', desc: '' },
        { label: '1 × Premium Harvesting Tool', icon: '⛏️', desc: '' },
        { label: '1 × Ba lô Paratrooper', icon: '🎒', desc: '' },
      ],
      status: 'Đã mở',
    },
  },
  {
    img: '/goi_default.png',
    name: 'Gói Chiến Binh',
    people: '500 người',
    status: 'Chưa mở',
    statusType: 'pending',
    alt: 'Gói Chiến Binh',
    locked: true,
    detail: {
      rewards: [
        { label: '150,000', icon: '💵', desc: '' },
        { label: '1,500', icon: '🪙', desc: '' },
        { label: '1 × NODROP Bleach Sword Katana', icon: '🗡️', desc: '' },
        { label: '3 × Premium Repair Kit', icon: '🧰', desc: '' },
        { label: '1 × Neon Dragon Locker', icon: '🗄️', desc: '' },
      ],
      status: 'Chưa mở',
    },
  },
  {
    img: '/goi_tinhanh.png',
    name: 'Gói Tinh Anh',
    people: '1,000 người',
    status: 'Chưa mở',
    statusType: 'pending',
    alt: 'Gói Tinh Anh',
    locked: true,
    detail: {
      rewards: [
        { label: '500,000', icon: '💵', desc: '' },
        { label: '2,500', icon: '🪙', desc: '' },
        { label: '1 × NODROP M4A1 DRAGONGOLD', icon: '🔫', desc: '' },
        { label: '1 × Baby Kaneki Ken Locker', icon: '🧒', desc: '' },
        { label: '1 × Premium Account 3 ngày', icon: '🏆', desc: '' },
      ],
      status: 'Chưa mở',
    },
  },
  {
    img: '/goi_huyenthoai.png',
    name: 'Gói Huyền Thoại',
    people: '5,000 người',
    status: 'Chưa mở',
    statusType: 'pending',
    alt: 'Gói Huyền Thoại',
    locked: true,
    detail: {
      rewards: [
        { label: '1,500,000', icon: '💵', desc: '' },
        { label: '5,000', icon: '🪙', desc: '' },
        { label: '1 × NODROP M107 CyberPpXKohtle', icon: '🔫', desc: '' },
        { label: '1 × Premium Account 30 ngày', icon: '🏆', desc: '' },
        { label: '1 × Baby Goku Super Saiyan Locker', icon: '👶', desc: '' },
      ],
      status: 'Chưa mở',
    },
  },
]

function RewardDetailBox({ reward }) {
  return (
    <div className="reward-detail-box">
      <div className="reward-detail-arrow" />
      <div className="reward-detail-title">{reward.name}</div>
      <div className="reward-detail-people">{reward.people}</div>
      <div className="reward-detail-divider" />
      <div className="reward-detail-label">Phần thưởng:</div>
      <ul className="reward-detail-list">
        {reward.detail.rewards.map((r, i) => (
          <li key={i} className="reward-detail-item">
            <span className="reward-detail-icon">{r.icon}</span>
            <span className="reward-detail-text">{r.label}</span>
          </li>
        ))}
      </ul>
      <div
        className={`reward-detail-status ${
          reward.detail.status === 'Đã mở' ? 'open' : 'pending'
        }`}
      >
        {reward.detail.status !== 'Đã mở' && (
          <span className="lock-icon">🔒</span>
        )}
        {reward.detail.status === 'Đã mở' ? '✔ Đã mở' : 'Chưa mở'}
      </div>
    </div>
  )
}

function RewardSection() {
  const [opened, setOpened] = useState(null)
  const cardRefs = useRef([])

  return (
    <div className="reward-section">
      <div className="reward-title">Phần thưởng đăng ký trước</div>
      <div className="reward-list">
        {rewards.map((r, i) => (
          <div
            className={`reward-card${opened === i ? ' hovered' : ''}`}
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onMouseEnter={() => r.detail && setOpened(i)}
            onMouseLeave={() => r.detail && setOpened(null)}
            style={{ cursor: r.detail ? 'pointer' : 'default' }}
          >
            <div className="reward-img-wrap">
              <img
                src={r.img}
                alt={r.alt}
                className={`reward-img${r.locked ? ' locked' : ''}`}
              />
              {r.locked && (
                <img
                  src="/icon_locked.png"
                  alt="locked"
                  className="reward-locked-icon"
                />
              )}
            </div>
            <div className="reward-name">{r.name}</div>
            <div className="reward-people">{r.people}</div>
            <div className={`reward-status ${r.statusType}`}>{r.status}</div>
            {opened === i && r.detail && (
              <RewardDetailBox
                reward={r}
                // Remove onClose and anchorRef, not needed for hover
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RewardSection
