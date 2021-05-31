import React from "react";
import "./MoreCard.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
function MoreCard({ team }) {
  const { setPageLoading } = useGlobalContext();
  const handleChangeYear = () => {
    setPageLoading(true);
  };
  return (
    <div className={`MoreCard ${team.replaceAll(" ", "")}`}>
      <Link
        to={`/IplDashboard/team/${team}/all/2020`}
        className="all-matches-link"
        onClick={handleChangeYear}
      >
        More Matches {">"}
      </Link>
    </div>
  );
}

export default MoreCard;
