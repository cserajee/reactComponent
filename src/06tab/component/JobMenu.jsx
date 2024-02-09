import React from "react";

const JobMenu = ({ jobs, activeJob, toggleAciveJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={activeJob === index ? "job-btn active-btn" : "job-btn"}
            key={job.id}
            onClick={() => toggleAciveJob(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default JobMenu;
