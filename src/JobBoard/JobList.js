import React from "react";
import JobCard from "../components/JobCard";

const JobList = ({ list }) => {
  return (
    <div className="job-list">
      {list.map((jobItem) => {
        const {
          id,
          type,
          url,
          created_at,
          company,
          location,
          title,
          company_logo,
        } = jobItem;

        return (
          <JobCard
            key={id}
            id={id}
            type={type}
            url={url}
            createdAt={created_at}
            company={company}
            location={location}
            title={title}
            logo={company_logo}
          />
        );
      })}
    </div>
  );
};

export default JobList;
