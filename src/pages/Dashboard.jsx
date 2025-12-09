import React from 'react'
import Status from '../components/dashboard/status/Status'
import Graph from '../components/dashboard/graph/Graph'
import Efficiency from '../components/dashboard/efficiency/Efficiency'
import WorkDetails from "../components/dashboard/workers details/WorkDetails"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Status />

      {/* TOP: Graph + Efficiency */}
      <div className="dashboard-main">
        <div className="dashboard-main-left">
          <Graph />
        </div>
        <div className="dashboard-main-right">
          <Efficiency />
        </div>
      </div>

      {/* BOTTOM: Work details full width */}
      <div className="dashboard-bottom">
        <WorkDetails />
      </div>
    </div>
  )
}

export default Dashboard
