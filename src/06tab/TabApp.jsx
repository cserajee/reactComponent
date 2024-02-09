import React, { useState, useEffect } from "react";
import "./style.css";
import JobMenu from "./component/JobMenu";
import JobInfo from "./component/JobInfo";

const url = "https://course-api.com/react-tabs-project";

const TabApp = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeJob, setActiveJob] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const newJobs = await response.json();
        setJobs(newJobs);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log("Error {} ", e);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const toggleAciveJob = (id) => {
    setActiveJob(id);
  };

  if (loading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  if (error)
    return (
      <section className="jobs-center">
        <h4>Job fetch error</h4>
        <button type="button" className="btn" onClick={fetchJobs}>
          Retry
        </button>
      </section>
    );
  return (
    <section className="jobs-center">
      <JobMenu
        jobs={jobs}
        activeJob={activeJob}
        toggleAciveJob={toggleAciveJob}
      />
      <JobInfo jobs={jobs} activeJob={activeJob} />
    </section>
  );
};

export default TabApp;
