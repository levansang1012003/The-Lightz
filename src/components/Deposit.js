import React, { useState } from 'react'
import './Deposit.css'

const Deposit = () => {
  const [copied, setCopied] = useState(false)
  const transferContent = 'THELZ10276'

  const handleCopy = () => {
    navigator.clipboard.writeText(transferContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="deposit-section">
      <div className="deposit-main-box">
        <div className="deposit-title">Nạp tiền vào tài khoản</div>
        <div className="deposit-desc">
          Nạp tiền để mua các vật phẩm và tính năng premium
        </div>
        <div className="deposit-balance-box">
          <span>Số dư hiện tại: </span>
          <span className="deposit-balance-points">200 🪙Game Points</span>
          <span className="deposit-balance-dollars">20,000 💵Game Dollars</span>
        </div>
        <div className="deposit-auto-box">
          <div className="deposit-auto-title">
            NẠP TIỀN TỰ ĐỘNG BANK - MOMO - ZALOPAY
          </div>
          <div className="deposit-auto-desc">
            Quét mã QR bên dưới để chuyển khoản:
          </div>
          <div className="deposit-qr-placeholder">[ QR CODE HERE ]</div>
          <div className="deposit-transfer-content-box">
            <div>Nội dung chuyển khoản:</div>
            <div className="deposit-transfer-content">{transferContent}</div>
            <button className="deposit-copy-btn" onClick={handleCopy}>
              {copied ? 'Đã copy!' : 'Copy nội dung'}
            </button>
          </div>
        </div>
        <div className="deposit-guide-box">
          <div className="deposit-guide-title">Hướng dẫn nạp tiền</div>
          <div className="deposit-guide-sub">Hướng dẫn thanh toán</div>
          <ol className="deposit-guide-list">
            <li>
              Mở app BANK hoặc MOMO quét mã QRCode và nhập số tiền cần chuyển.
            </li>
            <li>Nhập đúng nội dung chuyển khoản như trên.</li>
            <li>Sau 5-15s. Bạn sẽ nhận được Coin tự động trong tài khoản.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Deposit
