import React from 'react'
import StudentDashboard from "./Student/StudentDashboard"
import HelperDashboard from "./Helper/HelperDashboard"

const Dashboard = props => {

  return (
    <div>
      <StudentDashboard />
      <HelperDashboard />
    </div>
  )
}

export default Dashboard
