import React, { useState, useEffect } from "react";
import api from "../../api/api";
import KanbanDndKit from "./KanbanDndKit";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/admin_app/kanban/tasks/");
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching kanban tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="kanban-wrapper-main">
      <div className="kanban-top">
        <h2 className="kanban-title-text">Project Kanban</h2>

        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Users</option>
        </select>
      </div>

      <KanbanDndKit tasks={tasks} filter={filter} />
    </div>
  );
};

export default KanbanBoard;
