import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      try {
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (e) {
        console.error("error getting company:", e);
      }
    }
    getCompany();
  }, [handle]);

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CompanyDetail">
      <h2>{company.name}</h2>
      <h3>{company.description}</h3>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
