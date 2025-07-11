import React from 'react'
import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'
import { Outlet, Routes, Route, Navigate } from 'react-router-dom'
import Overview from './Overview'
import Profile from './Profile'
import Rewards from './Rewards'
import InviteFriends from './InviteFriends'
import Deposit from './Deposit'
import './Dashboard.css'

const DashboardLayout = () => (
  <div className="dashboard-center">
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  </div>
)

const Dashboard = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="profile" element={<Profile />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="invite" element={<InviteFriends />} />
        <Route path="deposit" element={<Deposit />} />
      </Route>
    </Routes>
  )
}

export default Dashboard
