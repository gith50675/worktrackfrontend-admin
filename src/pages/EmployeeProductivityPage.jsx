import React from 'react'
import EmployeeProductivity from "../components/productivity/employeeproductivity/EmployeeProductivity"
import RecentTasks from "../components/productivity/recent tasks/RecentTasks"
import ProductivityPieChart from "../components/productivity/productivity piechart/ProductivityPieChart"
import ProductivityAllTasks from "../components/productivity/productivityalltasks/ProductivityAllTasks"
import "./EmployeeProductivityPage.css"

const EmployeeProductivityPage = () => {
  return (
    <div className="employee-productivity-page">
      <EmployeeProductivity />

      <div className="employee-productivity-main">
        <div className="employee-productivity-left">
          <RecentTasks />
        </div>
        <div className="employee-productivity-right">
          <ProductivityPieChart />
        </div>
      </div>

      <ProductivityAllTasks />
    </div>
  )
}

export default EmployeeProductivityPage
