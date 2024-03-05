import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description }) {
  return (
    <Link to={`/companies/${handle}`}>
      <h2>{name}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default CompanyCard;
