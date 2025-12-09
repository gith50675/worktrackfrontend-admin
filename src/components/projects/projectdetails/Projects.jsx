import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Projects.css"

const Projects = () => {  
  const [openIndex, setOpenIndex] = useState(null); 

  const projects = [
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"},
    {work:"WebDevelopment",comapny:"PixelCraft Solutions",status:"In progress",time:"3Day left",progress:"60"}
  ];

  const handleToggleMenu = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <div className="PRoject">Projects</div>
          <NavLink to="/newproject">
            <div className='new-project-btn'>        
              <img className='plus-icon' src="/Add.svg" alt="" />
              <div>New Project</div>
            </div>   
          </NavLink>   
        </div>

        <div className="project-filter-sort-div">
          <button className='proj-sort-filt-btn'>
            <img src="/filter icon.svg" alt="" />
            <p className='filt-sort'>Filter</p>
          </button>
          <button className='proj-sort-filt-btn'>
            <img src="/sort icon.svg" alt="" />
            <p className='filt-sort'>Sort</p>
          </button>
        </div>

        {projects.map((proj, index) => (
          <div className="project-detail-status" key={index}>
            <div className="project-Name">
              {proj.work} <br /> <span>{proj.comapny}</span>
            </div>

            <div className="project-Status">{proj.status}</div>

            <div className="project-day-left">
              <img className='clock-icon' src="/clock.svg" alt="" /> 
              <p className='day-left'>{proj.time}</p>
            </div>

            <div className="progress-bar-per">
              <div className="progress-container">
                <div className='progress-bar' style={{ width: "50%" }} />
              </div>
              <span className="progress-value">{proj.progress}</span>
            </div>

            <div className="three-dot-wrapper">
              <div
                className="three-dot"
                onClick={() => handleToggleMenu(index)}
              >
                <img src="/3 dot.svg" alt="menu" />
              </div>

              {openIndex === index && (
                <div className="menu-popup">
                  <NavLink to="/projectdetail">
                    <p>View</p>
                  </NavLink>
                  <p>Edit</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
