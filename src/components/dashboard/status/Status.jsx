import React, { useEffect, useState } from "react";
import "./Status.css";
import api from "../../../api/api";

const Status = () => {
  const [stats, setStats] = useState({
    total_projects: 0,
    active_tasks: 0,
    completed_tasks: 0,
    active_members: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get("/admin_app/dashboard/summary/");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to load dashboard summary");
      }
    };

    fetchSummary();
  }, []);

  const statuscard = [
    {
      title: "Total Projects",
      icon: "total project icon.svg",
      count: stats.total_projects,
    },
    {
      title: "Active Tasks",
      icon: "active task icon.svg",
      count: stats.active_tasks,
    },
    {
      title: "Completed Tasks",
      icon: "completedtask icon.svg",
      count: stats.completed_tasks,
    },
    {
      title: "Active Members",
      icon: "Group 21.svg",
      count: stats.active_members,
    },
  ];

  return (
    <>
      <div className="dasboard-title-status-container">
        <div className="dashboard-title">
          <div className="dashboard">Dashboard</div>
        </div>

        <div className="card-space">
          {statuscard.map((card, index) => (
            <div className="status-div" key={index}>
              <div className="status-name">{card.title}</div>
              <div className="status-icon-count">
                <div className="status-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <div className="status-count">{card.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Status;
