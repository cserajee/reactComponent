import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ jobs, activeJob }) => {
  const { company, dates, duties, title } = jobs[activeJob];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <JobDuties duites={duties} />
    </article>
  );
};

export default JobInfo;
