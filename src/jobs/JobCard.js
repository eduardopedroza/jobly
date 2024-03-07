import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";

function JobCard({ job }) {
  // const [applied, setApplied] = useState(false);

  // useEffect(() => {
  //   setApplied();
  // }, [id, ])
  return (
    <div className="JobCard">
      <h4>{job.title}</h4>
      <p>Company: {job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <p>Salary: {job.salary}</p>
    </div>
  );
}
export default JobCard;
