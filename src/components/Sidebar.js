import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Bảng điều khiển</div>
      <div className="sidebar-user-box">
        <div className="sidebar-user-greeting">
          Xin chào, <b>tumatri!</b>
        </div>
        <div className="sidebar-user-id">ID: 10276</div>
      </div>
      <div className="sidebar-section-title">CHÍNH</div>
      <nav className="sidebar-menu">
        <NavLink
          to="overview"
          className={({ isActive }) =>
            'sidebar-menu-item' + (isActive ? ' active' : '')
          }
          end
        >
          <span className="sidebar-menu-icon">&#x1F5CB;</span> Tổng quan
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            'sidebar-menu-item' + (isActive ? ' active' : '')
          }
        >
          <span className="sidebar-menu-icon">&#128100;</span> Hồ sơ
        </NavLink>
        <NavLink
          to="rewards"
          className={({ isActive }) =>
            'sidebar-menu-item' + (isActive ? ' active' : '')
          }
        >
          <span className="sidebar-menu-icon">&#x1F381;</span> Phần thưởng
        </NavLink>
        <NavLink
          to="invite"
          className={({ isActive }) =>
            'sidebar-menu-item' + (isActive ? ' active' : '')
          }
        >
          <span className="sidebar-menu-icon">&#128101;&#x2795;</span> Mời bạn
          bè
        </NavLink>
        <NavLink
          to="deposit"
          className={({ isActive }) =>
            'sidebar-menu-item' + (isActive ? ' active' : '')
          }
        >
          <span className="sidebar-menu-icon">&#128179;</span> Nạp tiền
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
