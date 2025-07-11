import React, { useState, useEffect, useRef } from 'react'
import './FeatureSlider.css'

const slides = [
  {
    image: '/slider1.jpg',
    title: 'Thế Giới Mở Sinh Tồn',
    desc: 'Từng bước sinh tồn và cướp bóc trong thế giới hậu tận thế tối tăm.',
    tags: ['open‑world', 'survival', 'loot'],
  },
  {
    image: '/slider2.jpg',
    title: 'Skin System v3',
    desc: 'Tùy biến vũ khí và trang bị với hàng trăm skin hiếm từ thường đến huyền thoại.',
    tags: ['skins', 'customization', 'cosmetic'],
  },
  {
    image: '/slider3.jpg',
    title: 'Case System v2',
    desc: 'Mở hộp chiến lợi phẩm với cơ chế tỷ lệ mệnh giá minh bạch, nhận đồ VIP cực hiếm.',
    tags: ['lootbox', 'gacha', 'rewards'],
  },
  {
    image: '/slider4.jpg',
    title: 'Airdrop System v3',
    desc: 'Thùng tiếp tế rơi ngẫu nhiên, tranh chấp khốc liệt giữa người chơi và zombie có gear.',
    tags: ['airdrop', 'loot', 'event'],
  },
  {
    image: '/slider5.jpg',
    title: 'NODROP Item System',
    desc: 'Vật phẩm VIP & Premium luôn an toàn: không thể rơi ra, vứt bỏ hay trade khi chết.',
    tags: ['nodrop', 'security', 'vip-protection'],
  },
  {
    image: '/slider6.jpg',
    title: 'Weapon Attachment 2.0',
    desc: 'Gắn ống ngắm động, băng đạn mở rộng và muzzle flash siêu thực để tuỳ chỉnh hỏa lực.',
    tags: ['attachments', 'weapons', 'customization'],
  },
  {
    image: '/slider7.jpg',
    title: 'Crafting & Building',
    desc: 'Xây căn cứ kiên cố, chế tạo vũ khí, nông trại và máy phát điện để sinh tồn dài lâu.',
    tags: ['crafting', 'building', 'base'],
  },
  {
    image: '/assets/img/slide1.jpg',
    title: 'Anti‑Cheat & HWID',
    desc: 'Hệ thống nhận diện phần cứng và chụp màn hình định kỳ – nói không với hack.',
    tags: ['security', 'anti‑cheat', 'hwid'],
  },
  {
    image: '/assets/img/slide2.jpg',
    title: 'Clan & Social',
    desc: 'Tập hợp đồng đội, tắt friendly‑fire trong clan, leo bảng xếp hạng danh tiếng.',
    tags: ['clan', 'social', 'teamplay'],
  },
  {
    image: '/assets/img/slide3.jpg',
    title: 'Event Boss & Sự Kiện',
    desc: 'Đối đầu Boss sự kiện khổng lồ và tham gia chuỗi event mùa vụ đầy phần thưởng.',
    tags: ['event', 'boss', 'PVE'],
  },
  {
    image: '/assets/img/slide5.jpg',
    title: 'Battle Royale',
    desc: '100 người, một kẻ sống sót: vòng bo khí gas, respawn = 0, chiến thắng vinh quang!',
    tags: ['PVP', 'battle‑royale', 'gas‑zone'],
  },
]

function FeatureSlider() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(false)
  const timerRef = useRef(null)

  const goTo = (idx) => {
    setFade(true)
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length)
      setFade(false)
    }, 350) // match fade duration
  }

  // Auto-slide every 5s
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo(current + 1)
    }, 5000)
    return () => clearTimeout(timerRef.current)
  }, [current])

  return (
    <section className="feature-section">
      <div className="feature-title">Tính năng nổi bật</div>
      <div className="feature-slider">
        <img
          src={slides[current].image}
          alt="feature bg"
          className={`feature-bg${fade ? ' feature-fade' : ''}`}
        />
        <button
          className="feature-arrow left"
          onClick={() => goTo(current - 1)}
        >
          <span>&lt;</span>
        </button>
        <button
          className="feature-arrow right"
          onClick={() => goTo(current + 1)}
        >
          <span>&gt;</span>
        </button>
        <div className={`feature-content${fade ? ' feature-fade' : ''}`}>
          <div className="feature-main-title">{slides[current].title}</div>
          <div className="feature-desc">
            {slides[current].desc.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <div className="feature-tags">
            {slides[current].tags.map((tag, i) => (
              <span className="feature-tag" key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="feature-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === current ? 'dot active' : 'dot'}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSlider
