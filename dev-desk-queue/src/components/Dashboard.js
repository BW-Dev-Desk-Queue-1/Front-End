import React from 'react'
import StudentDashboard from "./Student/StudentDashboard"
import HelperDashboard from "./Helper/HelperDashboard"

const Dashboard = props => {
  const accessType = localStorage.getItem('accessType')
  return (
    <div>
      {accessType==='student' ? <StudentDashboard /> :
      <HelperDashboard /> }
    </div>
  )
}

export default Dashboard
