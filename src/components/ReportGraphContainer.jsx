// src/components/ReportGraphContainer.jsx
import React, { useEffect, useState } from "react";
import PlainSvgGraph from "./PlainSvgGraph";
import api from "../api/api";

const ReportGraphContainer = () => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTaskSummary = async () => {
      try {
        const res = await api.get("/admin_app/dashboard/summary/");
        const tasks = res.data.tasks || [];

        // X-axis → Task names
        setLabels(tasks.map(t => t.Task_Name));

        // Y-axis → Sessions count
        setData(tasks.map(t => t.Sessions));
      } catch (err) {
        console.error("Failed to load task summary graph", err);
      }
    };

    fetchTaskSummary();
  }, []);

  return (
    <PlainSvgGraph
      data={data}
      labels={labels}
      height={320}
    />
  );
};

export default ReportGraphContainer;
