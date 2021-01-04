import { useEffect, useState } from "react";
import Button from "../components/Button";
import appConfig from "../config/appConfig";
import JobList from "./JobList";
import "./style.scss";

const JobBoard = () => {
  const [jobList, setJobList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMorePages = () => setPage((p) => p + 1);

  useEffect(() => {
    setLoading(true);
    fetch(`${appConfig.cors}${appConfig.baseUrl}?page=${page}`)
      .then((response) => response.json())
      .then((positions) => {
        setJobList((j) => {
          setLoading(false);
          return [...j, ...positions];
        });
      })
      .catch(() => setLoading(false));
  }, [page]);

  if ((!jobList || jobList.length === 0) && isLoading) {
    return (
      <div className="container job-board">
        <div className="job-list">Loading...</div>
      </div>
    );
  }

  if (!jobList || jobList.length === 0) {
    return (
      <div className="container job-board">
        <div className="job-list">No job posting yet.</div>
      </div>
    );
  }

  return (
    <div className="container job-board">
      <JobList list={jobList} />
      <Button onClick={loadMorePages} isLoading={isLoading}>
        Load More
      </Button>
    </div>
  );
};

export default JobBoard;
