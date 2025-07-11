import React from 'react'
import './DashboardContent.css'

const DashboardContent = () => {
  return (
    <main className="dashboard-content">
      <div className="dashboard-grid dashboard-grid-original">
        <div className="dashboard-box dashboard-points">
          <div className="dashboard-box-title">Game Points</div>
          <div className="dashboard-box-value gold">
            200{' '}
            <span role="img" aria-label="coin">
              🪙
            </span>
          </div>
        </div>
        <div className="dashboard-box dashboard-dollars">
          <div className="dashboard-box-title">Game Dollars</div>
          <div className="dashboard-box-value green">
            20,000{' '}
            <span role="img" aria-label="money">
              🤑
            </span>
          </div>
        </div>
        <div className="dashboard-box dashboard-premium">
          <div className="dashboard-box-title">Premium Days</div>
          <div className="dashboard-box-value">0</div>
        </div>
        <div className="dashboard-box dashboard-level">
          <div className="dashboard-box-title">Level</div>
          <div className="dashboard-box-value">0</div>
        </div>
        <div className="dashboard-box dashboard-info">
          <div className="dashboard-box-title blue">Thông tin tài khoản</div>
          <div className="dashboard-box-info-content">
            <div>Account Type:</div>
            <div>
              Characters Created: <span className="right">2</span>
            </div>
            <div>
              Time Played: <span className="right">0 hours</span>
            </div>
            <div>
              Clan ID: <span className="right">0</span>
            </div>
          </div>
        </div>
        <div className="dashboard-box dashboard-activity">
          <div className="dashboard-box-title blue">Hoạt động gần đây</div>
          <div className="dashboard-box-activity-content">
            <div className="dashboard-activity-row">
              <div>
                <b>Đăng ký thành công</b>
                <br />
                Chào mừng đến với THE LIGHTZ VN!
              </div>
              <button className="dashboard-activity-status">Hoàn thành</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardContent
