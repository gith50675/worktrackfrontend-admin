import React from 'react'
import Status from '../components/dashboard/status/Status'
import Graph from '../components/dashboard/graph/Graph'
import Efficiency from '../components/dashboard/efficiency/Efficiency'
import WorkDetails from "../components/dashboard/workers details/WorkDetails"

const Dashboard = () => {
  return (
    <div>
      <Status/>
      <div style={{ display: "flex", gap: "20px" }}>
        <div><Graph/></div>
        <div><Efficiency/></div>
      </div>
      <WorkDetails/>
    </div>
    
  )
}

export default Dashboard
