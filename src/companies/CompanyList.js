import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    search();
  }, []);

  const search = async (name) => {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  };

  if (!companies) return <p>Loading...</p>;

  return (
    <div className="CompanyList">
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList List">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
            />
          ))}
        </div>
      ) : (
        <p>No companies were found</p>
      )}
    </div>
  );
}

export default CompanyList;
