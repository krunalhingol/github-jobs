import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import appConfig from "../config/appConfig";
import "./style.css";

const JobBoard = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(`${appConfig.cors}${appConfig.baseUrl}`)
      .then((response) => response.json())
      .then((positions) => {
        setJobList(positions);
      });
  }, []);

  return (
    <div className="container job-board">
      {jobList.map((jobItem) => {
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

export default JobBoard;
