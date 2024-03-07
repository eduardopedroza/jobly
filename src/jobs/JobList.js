import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import SearchForm from "../common/SearchForm";

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = async (title) => {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  };

  if (!jobs) {
    return <p>Loading...</p>;
  }

  return (
    <div className="JobList">
      <SearchForm searchFor={search} />
      {jobs.length ? <JobCardList jobs={jobs} /> : <p>No jobs were found</p>}
    </div>
  );
}

export default JobList;
