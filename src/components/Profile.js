import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">Thông tin hồ sơ</div>
      <div className="profile-desc">Quản lý thông tin tài khoản của bạn</div>
      <div className="profile-fields-grid">
        <div className="profile-field">
          <label className="profile-label">Customer ID</label>
          <input className="profile-input" value="10276" disabled />
        </div>
        <div className="profile-field">
          <label className="profile-label">Tên đăng nhập</label>
          <input className="profile-input" value="tumatri" disabled />
        </div>
        <div className="profile-field">
          <label className="profile-label">Email</label>
          <input
            className="profile-input"
            value="lut.sieunhan@gmail.com"
            disabled
          />
        </div>
        <div className="profile-field">
          <label className="profile-label">Ngày đăng ký</label>
          <input className="profile-input" value="10/07/2025" disabled />
        </div>
        <div className="profile-field">
          <label className="profile-label">Lần login cuối</label>
          <input className="profile-input" value="10/07/2025 18:21" disabled />
        </div>
        <div className="profile-field">
          <label className="profile-label">Account Status</label>
          <input className="profile-input" value="Active" disabled />
        </div>
        <div className="profile-field profile-field-email-verification">
          <label className="profile-label">Email Verification</label>
          <div className="profile-input-group">
            <input className="profile-input" value="Chờ xác nhận" disabled />
            <button className="profile-btn" disabled>
              Xác thực email
            </button>
          </div>
        </div>
      </div>
      <div className="profile-warning">
        Email chưa được xác nhận. Vui lòng kiểm tra hộp thư của bạn.
      </div>
      <div className="profile-warning-large">
        <b>Email chưa được xác nhận</b>
        <br />
        Tài khoản của bạn đã được tạo thành công, nhưng email chưa được xác
        nhận.
        <br />
        Vui lòng kiểm tra hộp thư (bao gồm thư mục spam) và nhấn vào link xác
        nhận để hoàn tất quá trình đăng ký.
      </div>
      <button className="profile-edit-btn">Chỉnh sửa hồ sơ</button>
    </div>
  )
}

export default Profile
